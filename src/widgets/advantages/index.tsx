import { useMemo } from "react"

import { useLanguage } from "../../i18n/useLanguage"
import { BrandInlineText } from "../../shared/brand-typography"
import { ScrollReveal } from "../../shared/scroll-reveal"

import "./style.css"

const ADVANTAGE_ITEM_KEYS = ["1", "2", "3", "4", "5", "6"] as const
const LIST_REVEAL_DELAY_S = 0.1

export const Advantages = () => {
    const { t } = useLanguage()
    const items = useMemo(
        () => ADVANTAGE_ITEM_KEYS.map((key) => t(`advantages.items.${key}`)),
        [t],
    )

    return (
        <section className="advantages" id="advantages" aria-labelledby="advantages-heading">
            <div className="advantages-inner container">
                <ScrollReveal>
                    <h2 className="advantages-title" id="advantages-heading">
                        <BrandInlineText text={t("advantages.sectionTitle")} />
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={LIST_REVEAL_DELAY_S}>
                    <ul className="advantages-list">
                        {items.map((text, index) => (
                            <li key={ADVANTAGE_ITEM_KEYS[index]} className="advantages-item">
                                {text}
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
            </div>
        </section>
    )
}
