"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Download, AlertCircle, CheckCircle2, Copy, RotateCcw, ExternalLink } from "lucide-react"
import { isValidYoutubeUrl } from "@/lib/youtube"
import { trackToolUsage } from "@/lib/analytics"

interface TranscriptLine {
  id: string
  language: string
  name: string
}

export function TranscriptDownloader() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [transcript, setTranscript] = useState("")
  const [showTimestamps, setShowTimestamps] = useState(false)
  const [copied, setCopied] = useState(false)
  const [captions, setCaptions] = useState<TranscriptLine[] | null>(null)

  const handleOpenAlternative = () => {
    const videoId = extractVideoId(url)
    if (videoId) {
      const transcriptUrl = `https://www.youtube-transcript.io/videos?id=${videoId}`
      window.open(transcriptUrl, "_blank")
      trackToolUsage("youtube_transcript_io_fallback")
    }
  }

  const extractVideoId = (youtubeUrl: string): string | null => {
    const patterns = [/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/, /youtube\.com\/embed\/([^&\n?#]+)/]

    for (const pattern of patterns) {
      const match = youtubeUrl.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }
    return null
  }

  const handleFetchTranscript = async () => {
    setError("")
    setTranscript("")
    setCaptions(null)

    if (!url.trim()) {
      setError("Please enter a YouTube URL")
      return
    }

    if (!isValidYoutubeUrl(url)) {
      setError("Please enter a valid YouTube URL")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/transcript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoUrl: url }),
      })

      const data = await response.json()

      console.log("[v0] Transcript API response:", data)

      if (!data.success) {
        setError(data.error || "Unable to fetch transcript. Try a video with available captions.")
        setLoading(false)
        return
      }

      if (data.transcript) {
        let processedTranscript = data.transcript

        if (!showTimestamps) {
          processedTranscript = data.transcript
            .split("\n")
            .map((line: string) => line.replace(/^\[\d{1,2}:\d{2}(?::\d{2})?\]\s*/, ""))
            .join("\n")
        }

        setTranscript(processedTranscript)

        // Set captions info if available
        if (data.captions && Array.isArray(data.captions)) {
          setCaptions(data.captions)
        }

        trackToolUsage("transcript_downloader")
        setError("")
      } else {
        setError("No transcript text found. Try another video.")
      }
    } catch (err) {
      console.error("[v0] Transcript error:", err)
      setError("Failed to fetch transcript. Please check the URL and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcript)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError("Failed to copy transcript")
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    element.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(transcript)}`)
    element.setAttribute("download", `youtube-transcript-${Date.now()}.txt`)
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    trackToolUsage("transcript_download")
  }

  const handleReset = () => {
    setUrl("")
    setTranscript("")
    setCaptions(null)
    setError("")
  }

  return (
    <Card className="p-6 sm:p-8 border-border/50 lg:col-span-2">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">YouTube Transcript Downloader</h3>
        <p className="text-sm text-foreground/60">Extract YouTube transcripts with AI-powered caption detection</p>
      </div>

      {/* Input Section */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">YouTube Video URL</label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-muted border-border text-foreground placeholder:text-foreground/50"
              disabled={loading}
            />
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-border hover:bg-muted bg-transparent"
              disabled={loading}
              title="Clear all fields"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
          <input
            type="checkbox"
            id="timestamps"
            checked={showTimestamps}
            onChange={(e) => setShowTimestamps(e.target.checked)}
            className="w-4 h-4 rounded cursor-pointer"
          />
          <label htmlFor="timestamps" className="text-sm font-medium text-foreground cursor-pointer">
            Show timestamps
          </label>
        </div>
      </div>

      {/* Error/Success State */}
      {error && (
        <div
          className={`mb-6 p-4 border rounded-lg flex flex-col gap-3 ${
            error.includes("found") || error.includes("processing")
              ? "bg-green-500/10 border-green-500/20"
              : "bg-red-500/10 border-red-500/20"
          }`}
        >
          <div className="flex gap-3">
            <AlertCircle
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${error.includes("found") || error.includes("processing") ? "text-green-600" : "text-red-500"}`}
            />
            <p
              className={`text-sm ${error.includes("found") || error.includes("processing") ? "text-green-700" : "text-red-700"}`}
            >
              {error}
            </p>
          </div>
          {/* Fallback button when error occurs and URL is valid */}
          {error && url && isValidYoutubeUrl(url) && (
            <Button
              onClick={handleOpenAlternative}
              variant="outline"
              className="w-full mt-2 border-current hover:bg-current/10 text-red-700 bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Try youtube-transcript.io instead
            </Button>
          )}
        </div>
      )}

      {/* Transcript Preview */}
      {transcript && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-foreground">Transcript</p>
            <span className="text-xs text-foreground/60">{transcript.split("\n").length} captions</span>
          </div>
          <textarea
            readOnly
            value={transcript}
            className="w-full p-4 bg-muted border border-border rounded-lg text-foreground text-sm resize-none h-48 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      )}

      {/* Caption Options */}
      {captions && captions.length > 0 && (
        <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm font-semibold text-foreground mb-3">Available Captions ({captions.length})</p>
          <div className="space-y-2">
            {captions.map((cap, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-background/50 rounded">
                <div>
                  <p className="text-sm font-medium text-foreground">{cap.name || "Caption"}</p>
                  <p className="text-xs text-foreground/60">
                    {cap.language === "default" ? "Auto-detected" : cap.language}
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button
          onClick={handleFetchTranscript}
          disabled={loading}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          {loading ? "Fetching..." : "Get Transcript"}
        </Button>
        {transcript && (
          <>
            <Button
              onClick={handleCopy}
              variant="outline"
              className="border-border hover:bg-muted bg-transparent"
              disabled={loading}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="border-border hover:bg-muted bg-transparent"
              disabled={loading}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
        <p className="text-xs sm:text-sm text-foreground/70">
          <span className="font-semibold">How it works:</span> Enter a YouTube URL and we'll check for available
          captions. The transcript will show all available caption options for that video. Videos without captions
          cannot be extracted.
        </p>
      </div>
    </Card>
  )
}
