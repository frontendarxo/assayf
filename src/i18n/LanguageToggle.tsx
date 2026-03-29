import "./language-toggle.css"

import { LOCALES, type Locale } from "./locale"
import { useLanguage } from "./useLanguage"

const LOCALE_LABEL: Record<Locale, string> = {
    ru: "RU",
    en: "EN",
    tr: "TR",
}

export function LanguageToggle() {
    const { locale, setLocale } = useLanguage()

    return (
        <div className="lang-toggle" role="group" aria-label="Язык / Language">
            {LOCALES.map((code) => (
                <button
                    key={code}
                    type="button"
                    className={`lang-toggle__option${locale === code ? " lang-toggle__option--active" : ""}`}
                    aria-pressed={locale === code}
                    onClick={() => setLocale(code)}
                >
                    {LOCALE_LABEL[code]}
                </button>
            ))}
            <span className="sr-only">Русский, English, Türkçe</span>
        </div>
    )
}
