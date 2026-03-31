import { useEffect, useId, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Info, X } from "lucide-react"

import aboutImage from "../../assets/img/About-Img.jpeg"
import { useLanguage } from "../../i18n/useLanguage"
import { OptimizedImage } from "../../shared/optimized-image"
import { PHONE_WHATSAPP } from "../contact"
import { BrandInlineText } from "../../shared/brand-typography"
import { STAGGER_STEP_S } from "../../shared/motion/reveal"
import { ScrollReveal } from "../../shared/scroll-reveal"
import "./style.css"

function splitAboutParagraphs(text: string): string[] {
    return text
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
}

const MODAL_MOTION_DURATION_S = 0.22

const FOUNDER_WHATSAPP_URL = `https://wa.me/${PHONE_WHATSAPP}`

type FounderInfoModalProps = {
    open: boolean
    onClose: () => void
    titleId: string
    title: string
    closeLabel: string
    paragraphs: string[]
    contactHeading: string
    whatsAppLinkLabel: string
    imageSrc: string
    imageAlt: string
}

function FounderInfoModal({
    open,
    onClose,
    titleId,
    title,
    closeLabel,
    paragraphs,
    contactHeading,
    whatsAppLinkLabel,
    imageSrc,
    imageAlt,
}: FounderInfoModalProps) {
    const mount =
        typeof document !== "undefined" ? document.body : null

    if (!mount) {
        return null
    }

    return createPortal(
        <AnimatePresence>
            {open ? (
                <motion.div
                    key="about-founder-overlay"
                    className="about-founder-modal-backdrop"
                    role="presentation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: MODAL_MOTION_DURATION_S }}
                    onClick={onClose}
                >
                    <motion.div
                        className="about-founder-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ duration: MODAL_MOTION_DURATION_S }}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <button
                            type="button"
                            className="about-founder-modal__close"
                            aria-label={closeLabel}
                            onClick={onClose}
                        >
                            <X aria-hidden size={22} strokeWidth={2} />
                        </button>
                        <div className="about-founder-modal__media">
                            <OptimizedImage
                                src={imageSrc}
                                alt={imageAlt}
                                className="about-founder-modal__image"
                            />
                        </div>
                        <h3 className="about-founder-modal__title" id={titleId}>
                            {title}
                        </h3>
                        <div className="about-founder-modal__body">
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="about-founder-modal__text">
                                    <BrandInlineText text={paragraph} />
                                </p>
                            ))}
                        </div>
                        <div className="about-founder-modal__contact">
                            <p className="about-founder-modal__contact-heading">
                                {contactHeading}
                            </p>
                            <a
                                className="about-founder-modal__contact-link"
                                href={FOUNDER_WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {whatsAppLinkLabel}
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>,
        mount,
    )
}

export const About = () => {
    const { t } = useLanguage()
    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const [isFounderModalOpen, setIsFounderModalOpen] = useState(false)
    const moreRegionId = useId()
    const founderModalTitleId = useId()

    const openFounderModal = () => {
        setIsFounderModalOpen(true)
    }

    const moreParagraphs = useMemo(
        () => splitAboutParagraphs(t("about.moreBody")),
        [t],
    )

    const founderParagraphs = useMemo(
        () => splitAboutParagraphs(t("about.founderInfoBody")),
        [t],
    )

    const services = useMemo(
        () => [
            { title: "100+", description: t("about.stat1") },
            { title: "1000+", description: t("about.stat2") },
            { title: "100+", description: t("about.stat3") },
            { title: "5+", description: t("about.stat4") },
        ],
        [t],
    )

    useEffect(() => {
        if (!isFounderModalOpen) {
            return
        }
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsFounderModalOpen(false)
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isFounderModalOpen])

    useEffect(() => {
        if (!isFounderModalOpen) {
            return
        }
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [isFounderModalOpen])

    return (
        <section className="about" id="about">
            <FounderInfoModal
                open={isFounderModalOpen}
                onClose={() => {
                    setIsFounderModalOpen(false)
                }}
                titleId={founderModalTitleId}
                title={t("about.founderInfoTitle")}
                closeLabel={t("about.founderInfoClose")}
                paragraphs={founderParagraphs}
                contactHeading={t("about.founderInfoContactHeading")}
                whatsAppLinkLabel={t("about.founderInfoWhatsAppLink")}
                imageSrc={aboutImage}
                imageAlt={t("about.imageAlt")}
            />
            <div className="container">
                <ScrollReveal>
                    <h2 className="about-title">{t("about.sectionTitle")}</h2>
                </ScrollReveal>
                <div className="about-content">
                    <ScrollReveal className="about-description" direction="right">
                        <p className="about-lead">
                            <BrandInlineText text={t("about.lead")} />
                        </p>
                        <div
                            className="about-more"
                            id={moreRegionId}
                            hidden={!isMoreOpen}
                        >
                            {moreParagraphs.map((paragraph, index) => (
                                <p key={index} className="about-text">
                                    <BrandInlineText text={paragraph} />
                                </p>
                            ))}
                        </div>
                        {moreParagraphs.length > 0 ? (
                            <button
                                type="button"
                                className="about-toggle"
                                aria-expanded={isMoreOpen}
                                aria-controls={moreRegionId}
                                onClick={() => {
                                    setIsMoreOpen((open) => !open)
                                }}
                            >
                                {isMoreOpen ? t("about.readLess") : t("about.readMore")}
                            </button>
                        ) : null}
                    </ScrollReveal>
                    <ScrollReveal className="about-image" direction="left">
                        <figure className="about-image__figure">
                            <button
                                type="button"
                                className="about-image__photo-trigger"
                                aria-label={t("about.founderInfoOpen")}
                                aria-haspopup="dialog"
                                aria-expanded={isFounderModalOpen}
                                onClick={openFounderModal}
                            >
                                <OptimizedImage
                                    src={aboutImage}
                                    alt=""
                                />
                                <span className="about-image__photo-hint" aria-hidden>
                                    {t("about.imageHoverHint")}
                                </span>
                            </button>
                            <button
                                type="button"
                                className="about-image__info-btn"
                                aria-label={t("about.founderInfoOpen")}
                                aria-haspopup="dialog"
                                aria-expanded={isFounderModalOpen}
                                onClick={openFounderModal}
                            >
                                <Info aria-hidden size={22} strokeWidth={2} />
                            </button>
                            <figcaption className="about-image__caption">
                                <BrandInlineText text={t("about.imageCaption")} />
                            </figcaption>
                        </figure>
                    </ScrollReveal>
                </div>
                <div className="about-services">
                    <ScrollReveal>
                        <h5 className="about-services-title">{t("about.statsTitle")}</h5>
                    </ScrollReveal>
                    <div className="about-services-content">
                        {services.map((service, index) => (
                            <ScrollReveal
                                key={service.description}
                                className="about-services-content__item"
                                delay={index * STAGGER_STEP_S}
                            >
                                <p className="about-services-content__item-title">{service.title}</p>
                                <span className="about-services-content__item-description">
                                    {service.description}
                                </span>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
