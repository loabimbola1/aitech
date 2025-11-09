"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Trash2, Copy, CheckCircle2 } from "lucide-react"
import { trackToolUsage } from "@/lib/analytics"

export function Notepad() {
  const [content, setContent] = useState("")
  const [copied, setCopied] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("aitechified-notepad")
    if (saved) {
      setContent(saved)
      trackToolUsage("notepad_loaded")
    }
  }, [])

  // Auto-save to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (content) {
        localStorage.setItem("aitechified-notepad", content)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [content])

  // Update counts
  useEffect(() => {
    setCharCount(content.length)
    const words = content.trim() ? content.trim().split(/\s+/).length : 0
    setWordCount(words)
  }, [content])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      trackToolUsage("notepad_copy")
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    element.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`)
    element.setAttribute("download", `aitechified-notes-${Date.now()}.txt`)
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    trackToolUsage("notepad_download")
  }

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      setContent("")
      localStorage.removeItem("aitechified-notepad")
      trackToolUsage("notepad_clear")
    }
  }

  return (
    <Card className="p-6 sm:p-8 border-border/50 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">AI-Powered Notepad</h3>
        <p className="text-sm text-foreground/60">Write and organize your notes with auto-save</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-border">
        <div>
          <p className="text-xs text-foreground/60 uppercase font-semibold">Words</p>
          <p className="font-bold text-lg text-foreground">{wordCount}</p>
        </div>
        <div>
          <p className="text-xs text-foreground/60 uppercase font-semibold">Characters</p>
          <p className="font-bold text-lg text-foreground">{charCount}</p>
        </div>
      </div>

      {/* Textarea */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing your notes here... They'll be auto-saved!"
        className="flex-1 w-full p-4 bg-muted border border-border rounded-lg text-foreground placeholder:text-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 mb-4"
      />

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2">
        <Button
          onClick={handleCopy}
          variant="outline"
          className="border-border hover:bg-muted text-sm bg-transparent"
          title="Copy all notes to clipboard"
        >
          <Copy className="w-4 h-4" />
          <span className="hidden sm:inline ml-1">Copy</span>
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="border-border hover:bg-muted text-sm bg-transparent"
          title="Download notes as text file"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline ml-1">Download</span>
        </Button>
        <Button
          onClick={handleClear}
          variant="outline"
          className="border-border hover:bg-red-500/10 text-sm bg-transparent"
          title="Clear all notes"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:inline ml-1">Clear</span>
        </Button>
      </div>

      {copied && (
        <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-green-700">Copied to clipboard!</p>
        </div>
      )}
    </Card>
  )
}
