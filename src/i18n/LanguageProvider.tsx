import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"

import { LanguageContext } from "./language-context"
import {
    DEFAULT_LOCALE,
    LOCALE_HTML_LANG,
    LOCALE_STORAGE_KEY,
    type Locale,
} from "./locale"
import { getMessage } from "./messages"

function readStoredLocale(): Locale {
    try {
        const raw = localStorage.getItem(LOCALE_STORAGE_KEY)
        if (raw === "ru" || raw === "en" || raw === "tr") return raw
    } catch {
        /* ignore */
    }
    return DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

    useEffect(() => {
        try {
            localStorage.setItem(LOCALE_STORAGE_KEY, locale)
        } catch {
            /* ignore */
        }
        document.documentElement.lang = LOCALE_HTML_LANG[locale]
    }, [locale])

    const setLocale = useCallback((next: Locale) => {
        setLocaleState(next)
    }, [])

    const t = useCallback((path: string) => getMessage(locale, path), [locale])

    const value = useMemo(
        () => ({
            locale,
            setLocale,
            t,
        }),
        [locale, setLocale, t],
    )

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
