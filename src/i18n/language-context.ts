import { createContext } from "react"

import type { Locale } from "./locale"

export type LanguageContextValue = {
    locale: Locale
    setLocale: (locale: Locale) => void
    t: (path: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
