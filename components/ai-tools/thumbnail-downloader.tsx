"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Download, AlertCircle, CheckCircle2 } from "lucide-react"
import { getVideoId, getThumbnailUrl, isValidYoutubeUrl } from "@/lib/youtube"
import { trackToolUsage } from "@/lib/analytics"

export function ThumbnailDownloader() {
  const [url, setUrl] = useState("")
  const [quality, setQuality] = useState<"hq" | "sd" | "max">("hq")
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleExtract = async () => {
    setError("")
    setThumbnail(null)

    if (!url.trim()) {
      setError("Please enter a YouTube URL")
      return
    }

    if (!isValidYoutubeUrl(url)) {
      setError("Please enter a valid YouTube URL")
      return
    }

    setLoading(true)
    const videoId = getVideoId(url)

    if (!videoId) {
      setError("Unable to extract video ID from URL")
      setLoading(false)
      return
    }

    try {
      const thumbnailUrl = getThumbnailUrl(videoId, quality)

      // Verify the thumbnail exists
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        setThumbnail(thumbnailUrl)
        trackToolUsage("thumbnail_downloader")
        setLoading(false)
      }
      img.onerror = () => {
        setError("Thumbnail not found. The video might be private or unavailable.")
        setLoading(false)
      }
      img.src = thumbnailUrl
    } catch (err) {
      setError("Failed to process thumbnail. Please try another video.")
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!thumbnail) return

    try {
      const response = await fetch(thumbnail)
      const blob = await response.blob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = `youtube-thumbnail-${Date.now()}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    } catch (err) {
      setError("Failed to download thumbnail")
    }
  }

  return (
    <Card className="p-6 sm:p-8 border-border/50">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">YouTube Thumbnail Downloader</h3>
        <p className="text-sm text-foreground/60">Extract YouTube thumbnails in HD quality</p>
      </div>

      {/* Input Section */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">YouTube Video URL</label>
          <Input
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-muted border-border text-foreground placeholder:text-foreground/50"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">Thumbnail Quality</label>
          <div className="grid grid-cols-3 gap-2">
            {(["hq", "sd", "max"] as const).map((q) => (
              <button
                key={q}
                onClick={() => setQuality(q)}
                disabled={loading}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  quality === q ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {q === "hq" ? "HD (720p)" : q === "sd" ? "SD (480p)" : "Max (1080p+)"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Preview Section */}
      {thumbnail && (
        <div className="mb-6">
          <p className="text-sm font-semibold mb-3 text-foreground">Preview</p>
          <div className="relative bg-muted rounded-lg overflow-hidden mb-4 h-48 sm:h-64">
            <img src={thumbnail || "/placeholder.svg"} alt="YouTube Thumbnail" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleExtract}
          disabled={loading}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          {loading ? "Extracting..." : "Extract Thumbnail"}
        </Button>
        {thumbnail && (
          <Button
            onClick={handleDownload}
            variant="outline"
            className="flex-1 border-border hover:bg-muted bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        )}
      </div>

      {thumbnail && (
        <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-700">Thumbnail ready for download</p>
        </div>
      )}
    </Card>
  )
}
