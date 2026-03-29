export type Locale = "ru" | "en" | "tr"

export const LOCALES: readonly Locale[] = ["ru", "en", "tr"] as const

export const LOCALE_STORAGE_KEY = "assayf-locale"

export const DEFAULT_LOCALE: Locale = "ru"

export const LOCALE_HTML_LANG: Record<Locale, string> = {
    ru: "ru",
    en: "en",
    tr: "tr",
}
