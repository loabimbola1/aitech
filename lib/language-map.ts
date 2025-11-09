export const languageMap: Record<string, string> = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  "pt-BR": "Portuguese (Brazil)",
  ru: "Russian",
  ja: "Japanese",
  zh: "Chinese (Simplified)",
  "zh-CN": "Chinese (Simplified)",
  "zh-TW": "Chinese (Traditional)",
  ko: "Korean",
  ar: "Arabic",
  hi: "Hindi",
  th: "Thai",
  vi: "Vietnamese",
  tr: "Turkish",
  pl: "Polish",
  nl: "Dutch",
  sv: "Swedish",
  no: "Norwegian",
  da: "Danish",
  fi: "Finnish",
  cs: "Czech",
  hu: "Hungarian",
  ro: "Romanian",
  el: "Greek",
  he: "Hebrew",
  id: "Indonesian",
  ms: "Malay",
  ta: "Tamil",
  te: "Telugu",
  bn: "Bengali",
  uk: "Ukrainian",
  sk: "Slovak",
  ca: "Catalan",
  nb: "Norwegian Bokmål",
}

export function getLanguageName(languageCode: string): string {
  if (!languageCode || languageCode === "unknown") {
    return "Default Caption"
  }
  return languageMap[languageCode] || `Language (${languageCode})`
}
