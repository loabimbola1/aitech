export function getVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}

export function getThumbnailUrl(videoId: string, quality: "default" | "hq" | "sd" | "max" = "hq"): string {
  const qualityMap = {
    default: "default.jpg",
    hq: "hqdefault.jpg",
    sd: "sddefault.jpg",
    max: "maxresdefault.jpg",
  }
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}`
}

export function isValidYoutubeUrl(url: string): boolean {
  return /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\//.test(url)
}
