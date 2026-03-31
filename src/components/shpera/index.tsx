import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react"

import { useLanguage } from "../../i18n/useLanguage"
import { BrandInlineText } from "../../shared/brand-typography"
import type { Sphere, SphereImageSource, SphereSection } from "../../types/spehera"
import {
    REVEAL_OFFSET_PX,
    STAGGER_STEP_S,
    VIEWPORT_DEFAULT,
    revealTransition,
} from "../../shared/motion/reveal"
import "./style.css"

export type ShperaCardTheme = {
    backgroundColor: string
    color: string
    borderColor: string
    dividerColor: string
}

type ShperaProps = Sphere & { cardTheme: ShperaCardTheme }

function sphereImageUrl(source: SphereImageSource): string {
    return typeof source === "string" ? source : source.src
}

const AUTO_SLIDE_INTERVAL_MS = 5000

function useAutoSlideIndex(imageCount: number) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (imageCount <= 1) return
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % imageCount)
        }, AUTO_SLIDE_INTERVAL_MS)
        return () => window.clearInterval(id)
    }, [imageCount])

    return index
}

function SphereExtraSections({ sections }: { sections: SphereSection[] }) {
    if (sections.length === 0) return null
    return (
        <div className="shpera-extra-sections">
            {sections.map((section, index) => (
                <div className="shpera-section" key={index}>
                    {section.heading ? (
                        <h4 className="shpera-section-heading">
                            <BrandInlineText text={section.heading} />
                        </h4>
                    ) : null}
                    <p
                        className={
                            section.heading
                                ? "shpera-section-body"
                                : "shpera-section-body shpera-section-body--note"
                        }
                    >
                        <BrandInlineText text={section.body} />
                    </p>
                </div>
            ))}
        </div>
    )
}

export const Shpera = ({ cardTheme, ...sphere }: ShperaProps) => {
    const { t } = useLanguage()
    const reduce = useReducedMotion()
    const [descriptionExpanded, setDescriptionExpanded] = useState(false)
    const [descriptionOverflows, setDescriptionOverflows] = useState(false)
    const descriptionRef = useRef<HTMLParagraphElement>(null)

    const panelHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: REVEAL_OFFSET_PX }
    const panelVisible = { opacity: 1, y: 0 }
    const caseHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: REVEAL_OFFSET_PX * 0.75 }
    const caseVisible = { opacity: 1, y: 0 }

    useLayoutEffect(() => {
        const el = descriptionRef.current
        if (!el || descriptionExpanded) return
        setDescriptionOverflows(el.scrollHeight > el.clientHeight)
    }, [sphere.description, descriptionExpanded])

    const showDescriptionToggle = descriptionOverflows || descriptionExpanded
    const showCta = Boolean(sphere.cta.trim())
    const leadText = sphere.lead.trim()

    const images = sphere.images
    const count = images.length
    const slideIndex = useAutoSlideIndex(count)
    const caseCount = sphere.cases.length
    const casesGridStyle = {
        "--shpera-case-count": caseCount,
    } as CSSProperties

    const imagesShellStyle =
        count > 0 ? ({ "--shpera-slide-count": count } as CSSProperties) : undefined

    return (
        <div className="shpera-item">
            <motion.div
                className={
                    count === 0 ? "shpera-images shpera-images--empty" : "shpera-images"
                }
                style={imagesShellStyle}
                initial={panelHidden}
                whileInView={panelVisible}
                viewport={VIEWPORT_DEFAULT}
                transition={revealTransition(0)}
            >
                {count > 0 && (
                    <div
                        className="shpera-images-track"
                        style={{
                            width: `${count * 100}%`,
                            transform: `translateX(-${(slideIndex * 100) / count}%)`,
                        }}
                    >
                        {images.map((image) => (
                            <img
                                src={sphereImageUrl(image.image)}
                                alt={`${sphere.title} — ${t("spheres.imageAltSuffix")}`}
                                key={image.id}
                                className="shpera-images-slide"
                            />
                        ))}
                    </div>
                )}
            </motion.div>
            <motion.div
                className="shpera-content"
                initial={panelHidden}
                whileInView={panelVisible}
                viewport={VIEWPORT_DEFAULT}
                transition={revealTransition(0.06)}
            >
                <div className="sphera-text">
                    <h3 className="shpera-title">
                        <BrandInlineText text={sphere.subtitle} />
                    </h3>
                    {leadText ? (
                        <p className="shpera-lead">
                            <BrandInlineText text={leadText} />
                        </p>
                    ) : null}
                    <div className="shpera-description-block">
                        <p
                            ref={descriptionRef}
                            className={
                                descriptionExpanded
                                    ? "shpera-description"
                                    : "shpera-description shpera-description--clamped"
                            }
                        >
                            <BrandInlineText text={sphere.description} />
                        </p>
                        <div
                            className="shpera-description-actions"
                            aria-hidden={!showDescriptionToggle}
                        >
                            {showDescriptionToggle ? (
                                <button
                                    type="button"
                                    className="shpera-description-toggle"
                                    aria-expanded={descriptionExpanded}
                                    onClick={() => setDescriptionExpanded((v) => !v)}
                                >
                                    {descriptionExpanded
                                        ? t("shpera.collapse")
                                        : t("shpera.readMore")}
                                </button>
                            ) : null}
                        </div>
                    </div>
                </div>
                <SphereExtraSections sections={sphere.sections} />
                {caseCount > 0 ? (
                    <>
                        <h4 className="shpera-cases-heading">
                            {t("spheres.casesTitle")}
                        </h4>
                        <div className="shpera-cases" style={casesGridStyle}>
                            {sphere.cases.map(({ id, title, detail }, caseIndex) => (
                                <motion.div
                                    className="shpera-case"
                                    key={id}
                                    style={{
                                        backgroundColor: cardTheme.backgroundColor,
                                        color: cardTheme.color,
                                        borderColor: cardTheme.borderColor,
                                    }}
                                    initial={caseHidden}
                                    whileInView={caseVisible}
                                    viewport={VIEWPORT_DEFAULT}
                                    transition={revealTransition(
                                        0.08 + caseIndex * STAGGER_STEP_S,
                                    )}
                                >
                                    <h4 className="shpera-case-title">
                                        <BrandInlineText text={title} />
                                    </h4>
                                    <hr
                                        className="shpera-case-divider"
                                        style={{
                                            backgroundColor: cardTheme.dividerColor,
                                        }}
                                    />
                                    <p className="shpera-case-detail">
                                        <BrandInlineText text={detail} />
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : null}
                {showCta ? (
                    <a className="shpera-cta" href="#contact">
                        <BrandInlineText text={sphere.cta} />
                    </a>
                ) : null}
            </motion.div>
        </div>
    )
}
