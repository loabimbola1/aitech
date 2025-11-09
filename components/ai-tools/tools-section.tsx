"use client"
import { Zap } from "lucide-react"
import { ThumbnailDownloader } from "./thumbnail-downloader"
import { Notepad } from "./notepad"
import { TranscriptDownloader } from "./transcript-downloader"

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Free AI Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Free AI Tools - Start Using Today
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Experience the power of AI tools before enrolling in our programs
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <ThumbnailDownloader />
          <Notepad />
        </div>

        {/* Transcript Downloader - Full Width */}
        <div className="grid gap-8">
          <TranscriptDownloader />
        </div>
      </div>
    </section>
  )
}
