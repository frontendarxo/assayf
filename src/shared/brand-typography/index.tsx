import { Fragment, type ReactNode } from "react"

const ASSAYF_SPLIT = /(Assayf\s+Company|Assayf(?:'s|’s)|Assayf)/gi

const IS_BRAND_PART = /^(Assayf\s+Company|Assayf(?:'s|’s)|Assayf)$/i

function assayfSplitParts(text: string): string[] {
    return text.split(ASSAYF_SPLIT).filter((p) => p.length > 0)
}

function isAssayfBrandToken(part: string): boolean {
    return IS_BRAND_PART.test(part.trim())
}

/** Латинский основной текст — Gilroy (CSS); слова Assayf / Assayf Company — F37 через .font-brand. */
export function BrandInlineText({ text }: { text: string }): ReactNode {
    if (!text) {
        return text
    }
    const parts = assayfSplitParts(text)
    return (
        <>
            {parts.map((part, i) =>
                isAssayfBrandToken(part) ? (
                    <span key={i} className="font-brand">
                        {part}
                    </span>
                ) : (
                    <Fragment key={i}>{part}</Fragment>
                ),
            )}
        </>
    )
}

/** Имена аккаунтов, никнеймы и строка копирайта — фирменный F37. */
export function BrandSpan({ children }: { children: string }): ReactNode {
    return <span className="font-brand">{children}</span>
}
