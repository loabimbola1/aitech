import { NextResponse } from "next/server"
import { getVideoId } from "@/lib/youtube"

// Helper function to decode HTML entities
function decodeHTMLEntities(text: string): string {
  const entities: { [key: string]: string } = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
  }
  return text.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity)
}

// Helper to extract transcript from YouTube page
async function getTranscriptFromYouTube(videoId: string): Promise<{
  transcript: string
  captions: Array<{ id: string; language: string; name: string }>
} | null> {
  try {
    const videoPageUrl = `https://www.youtube.com/watch?v=${videoId}`
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

    const pageResponse = await fetch(videoPageUrl, {
      headers: {
        "User-Agent": userAgent,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Cache-Control": "max-age=0",
      },
      signal: AbortSignal.timeout(15000),
    })

    if (!pageResponse.ok) {
      console.log("[v0] YouTube page fetch failed:", pageResponse.status)
      return null
    }

    const html = await pageResponse.text()

    // Extract captions tracker from page - look for multiple possible patterns
    let captionTracks: Array<{ baseUrl: string; languageCode: string; name?: { simpleText?: string } }> = []

    // Pattern 1: Standard caption tracks
    const captionMatch = html.match(/"captionTracks":\s*(\[[^\]]*?\}[^\]]*?\])/i)
    if (captionMatch) {
      try {
        captionTracks = JSON.parse(captionMatch[1])
      } catch (e) {
        console.log("[v0] Failed to parse caption tracks from pattern 1")
      }
    }

    // Pattern 2: playerCaptionsTracklistRenderer
    if (captionTracks.length === 0) {
      const playerMatch = html.match(/"playerCaptionsTracklistRenderer":\{.*?"caption":\s*(\[[^\]]*?\}[^\]]*?\])/is)
      if (playerMatch) {
        try {
          captionTracks = JSON.parse(playerMatch[1])
        } catch (e) {
          console.log("[v0] Failed to parse caption tracks from pattern 2")
        }
      }
    }

    if (captionTracks.length === 0) {
      console.log("[v0] No caption tracks found")
      return null
    }

    console.log("[v0] Found", captionTracks.length, "caption tracks")

    // Get the first available caption track
    const selectedTrack = captionTracks[0]
    if (!selectedTrack.baseUrl) {
      console.log("[v0] Selected track has no baseUrl")
      return null
    }

    // Fetch the caption XML
    console.log("[v0] Fetching captions from:", selectedTrack.baseUrl.substring(0, 60) + "...")

    const captionResponse = await fetch(selectedTrack.baseUrl, {
      headers: { "User-Agent": userAgent },
      signal: AbortSignal.timeout(10000),
    })

    if (!captionResponse.ok) {
      console.log("[v0] Caption fetch failed:", captionResponse.status)
      return null
    }

    const captionXml = await captionResponse.text()

    // Parse XML to extract text content
    const captionMatches = captionXml.match(/<text[^>]*>([^<]+)<\/text>/g) || []

    if (captionMatches.length === 0) {
      console.log("[v0] No text content found in caption XML")
      return null
    }

    // Extract and clean transcript
    const transcript = captionMatches
      .map((match) => {
        const textContent = match.replace(/<[^>]*>/g, "")
        return decodeHTMLEntities(decodeURIComponent(textContent).replace(/\+/g, " "))
      })
      .join(" ")
      .trim()

    if (!transcript) {
      console.log("[v0] Transcript is empty after processing")
      return null
    }

    console.log("[v0] Successfully extracted transcript:", transcript.length, "characters")

    const languageCode = selectedTrack.languageCode || "en"
    const languageName = selectedTrack.name?.simpleText || getLanguageName(languageCode)

    return {
      transcript,
      captions: [
        {
          id: selectedTrack.baseUrl.split("/").pop() || "default",
          language: languageCode,
          name: languageName,
        },
      ],
    }
  } catch (error) {
    console.error("[v0] Error fetching transcript from YouTube:", error)
    return null
  }
}

async function getTranscriptFromYouTubeTranscriptIO(
  videoId: string,
): Promise<{ transcript: string; captions: Array<{ id: string; language: string; name: string }> } | null> {
  const apiToken = process.env.YOUTUBE_TRANSCRIPT_IO_TOKEN
  if (!apiToken) {
    console.log("[v0] youtube-transcript.io token not configured")
    return null
  }

  try {
    const response = await fetch("https://www.youtube-transcript.io/api/transcripts", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiToken}:`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: [videoId] }),
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      console.log("[v0] youtube-transcript.io request failed:", response.status)
      return null
    }

    const data = await response.json()

    if (data && data[videoId] && data[videoId].length > 0) {
      const transcriptLines = data[videoId]
      const transcript = transcriptLines.map((line: { text: string }) => line.text).join(" ")

      return {
        transcript,
        captions: [
          {
            id: "youtube-transcript-io",
            language: "en",
            name: "English (youtube-transcript.io)",
          },
        ],
      }
    }

    return null
  } catch (error) {
    console.error("[v0] Error with youtube-transcript.io API:", error)
    return null
  }
}

function getLanguageName(code: string): string {
  const languageMap: { [key: string]: string } = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    pt: "Portuguese",
    ru: "Russian",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese",
    ar: "Arabic",
    hi: "Hindi",
    nl: "Dutch",
    pl: "Polish",
    tr: "Turkish",
    vi: "Vietnamese",
  }
  return languageMap[code] || code.toUpperCase()
}

export async function POST(request: Request) {
  try {
    const { videoUrl } = await request.json()

    if (!videoUrl) {
      return NextResponse.json({ success: false, error: "Video URL is required" }, { status: 400 })
    }

    const videoId = getVideoId(videoUrl)
    if (!videoId) {
      return NextResponse.json({ success: false, error: "Invalid YouTube URL" }, { status: 400 })
    }

    console.log("[v0] Fetching transcript for video ID:", videoId)

    let result = await getTranscriptFromYouTube(videoId)

    if (!result) {
      console.log("[v0] YouTube method failed, trying youtube-transcript.io")
      result = await getTranscriptFromYouTubeTranscriptIO(videoId)
    }

    if (!result) {
      console.log("[v0] All transcript fetching methods failed")
      return NextResponse.json(
        {
          success: false,
          error:
            "No captions available for this video. Please try a video with available captions or auto-generated subtitles.",
          hasTranscript: false,
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      videoId,
      transcript: result.transcript,
      language: "en",
      languageName: "English",
      captions: result.captions,
    })
  } catch (error) {
    console.error("[v0] Transcript API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Server error processing transcript request. Please try again later.",
        hasTranscript: false,
      },
      { status: 500 },
    )
  }
}
