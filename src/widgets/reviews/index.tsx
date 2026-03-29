import { clsx } from "clsx"
import { useEffect, useMemo, useState } from "react"

import { getLocalizedReviews } from "../../data/reviews"
import { useLanguage } from "../../i18n/useLanguage"
import { BrandInlineText, BrandSpan } from "../../shared/brand-typography"
import { ScrollReveal } from "../../shared/scroll-reveal"

import "./style.css"

const AUTO_ADVANCE_INTERVAL_MS = 5000

export const Reviews = () => {
    const { t } = useLanguage()
    const reviews = useMemo(() => getLocalizedReviews(t), [t])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (reviews.length === 0) return
        const id = window.setInterval(() => {
            setActiveIndex((i) => (i + 1) % reviews.length)
        }, AUTO_ADVANCE_INTERVAL_MS)
        return () => window.clearInterval(id)
    }, [reviews.length])

    return (
        <section className="reviews" id="reviews">
            <div className="container ">
                <div className="reviews-content">
                    <ScrollReveal>
                        <h2 className="reviews-title">{t("reviews.sectionTitle")}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.08}>
                        <h3 className="reviews-subtitle">
                            <BrandInlineText text={t("reviews.subtitle")} />
                        </h3>
                    </ScrollReveal>
                    <ScrollReveal delay={0.14}>
                        <div
                            className="relative isolate mx-auto grid w-full max-w-2xl grid-cols-1"
                            role="region"
                            aria-roledescription="carousel"
                            aria-label={t("reviews.carouselLabel")}
                            aria-live="polite"
                        >
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className={clsx(
                                        "reviews-list-item col-start-1 row-start-1 flex flex-col items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-[#EAEAEA] px-5 py-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-opacity duration-500 ease-in-out motion-reduce:transition-none",
                                        index === activeIndex
                                            ? "z-10 opacity-100"
                                            : "z-0 opacity-0 pointer-events-none",
                                    )}
                                    aria-hidden={index !== activeIndex}
                                >
                                    <p className="text-center text-2xl font-extrabold text-[#101010]">
                                        <BrandSpan>{review.name}</BrandSpan>
                                    </p>
                                    <p className="text-center text-xl font-normal leading-snug text-[#9DA1A2]">
                                        <BrandInlineText text={review.text} />
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
