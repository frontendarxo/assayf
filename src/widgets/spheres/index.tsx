import { clsx } from "clsx"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"

import { Shpera, type ShperaCardTheme } from "../../components/shpera"
import { getLocalizedSpheres } from "../../data/spheres"
import { useLanguage } from "../../i18n/useLanguage"
import {
    REVEAL_OFFSET_PX,
    STAGGER_STEP_S,
    VIEWPORT_DEFAULT,
    revealTransition,
} from "../../shared/motion/reveal"
import { ScrollReveal } from "../../shared/scroll-reveal"
import { SphereTabIcon } from "./SphereTabIcon"
import "./style.css"

const SPHERE_ACTIVE_BACKGROUND: Record<number, string> = {
    1: "#161A1D",
    2: "#602026",
    3: "#123430",
    4: "#182E44",
    5: "#EAEAEA",
}

const SPHERES_TEXT_ON_DARK_BG = "#AEAEAE"
const SPHERES_TEXT_ON_LIGHT_BG = "#161A1D"
const DARK_BG_LUMINANCE_THRESHOLD = 0.4

const SPHERE_AUTO_ROTATION_MS = 20_000

/** Доля секции в viewport, с которой считаем, что пользователь «дошёл» до блока */
const SPHERE_SECTION_VISIBILITY_THRESHOLD = 0.2
const SPHERE_CONTENT_CROSSFADE_S = 0.55

const ICON_SPRING_STIFFNESS = 400
const ICON_SPRING_DAMPING = 26
const ICON_HOVER_SCALE = 1.06
const ICON_REVEAL_DELAY_S = 0.03

const SPHERES_CARD_ON_DARK_SECTION = {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.22)",
    dividerColor: "rgba(255, 255, 255, 0.35)",
} as const

const SPHERES_CARD_ON_LIGHT_SECTION = {
    backgroundColor: "rgba(22, 26, 29, 0.08)",
    borderColor: "rgba(22, 26, 29, 0.2)",
    dividerColor: "rgba(22, 26, 29, 0.28)",
} as const

function isDarkBackgroundColor(hex: string): boolean {
    const digits = hex.replace("#", "")
    const n = parseInt(digits, 16)
    const r = (n >> 16) & 255
    const g = (n >> 8) & 255
    const b = n & 255
    const linear = (channel: number) => {
        const x = channel / 255
        return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4
    }
    const luminance = 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b)
    return luminance < DARK_BG_LUMINANCE_THRESHOLD
}

function sphereListItemStyle(activeId: number, sphereId: number) {
    if (activeId !== sphereId) return undefined
    return { backgroundColor: SPHERE_ACTIVE_BACKGROUND[sphereId] }
}

export const Spheres = () => {
    const { t } = useLanguage()
    const spheres = useMemo(() => getLocalizedSpheres(t), [t])
    const [activeSphere, setActiveSphere] = useState<number>(1)
    const [isSectionInView, setIsSectionInView] = useState(false)
    const sectionRef = useRef<HTMLElement | null>(null)
    const reduce = useReducedMotion()

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                const visible =
                    entry.isIntersecting &&
                    entry.intersectionRatio >= SPHERE_SECTION_VISIBILITY_THRESHOLD
                setIsSectionInView(visible)
            },
            { threshold: [0, SPHERE_SECTION_VISIBILITY_THRESHOLD, 0.5, 1] },
        )
        observer.observe(el)
        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        if (reduce || spheres.length <= 1 || !isSectionInView) return
        const id = window.setInterval(() => {
            setActiveSphere((prev) => {
                const idx = spheres.findIndex((s) => s.id === prev)
                const nextIdx = (Math.max(0, idx) + 1) % spheres.length
                return spheres[nextIdx].id
            })
        }, SPHERE_AUTO_ROTATION_MS)
        return () => window.clearInterval(id)
    }, [reduce, spheres, isSectionInView])

    const sectionStyle = useMemo(() => {
        const backgroundColor = SPHERE_ACTIVE_BACKGROUND[activeSphere]
        const isDark = isDarkBackgroundColor(backgroundColor)
        return {
            backgroundColor,
            color: isDark ? SPHERES_TEXT_ON_DARK_BG : SPHERES_TEXT_ON_LIGHT_BG,
        }
    }, [activeSphere])

    const cardTheme = useMemo((): ShperaCardTheme => {
        const backgroundColor = SPHERE_ACTIVE_BACKGROUND[activeSphere]
        const isDark = isDarkBackgroundColor(backgroundColor)
        const base = isDark ? SPHERES_CARD_ON_DARK_SECTION : SPHERES_CARD_ON_LIGHT_SECTION
        return {
            ...base,
            color: isDark ? SPHERES_TEXT_ON_DARK_BG : SPHERES_TEXT_ON_LIGHT_BG,
        }
    }, [activeSphere])

    const listItemHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: REVEAL_OFFSET_PX * 0.5 }
    const listItemVisible = { opacity: 1, y: 0 }
    const iconHidden = reduce
        ? { scale: 1, opacity: 1 }
        : { scale: 0.88, opacity: 0.65 }
    const iconVisible = { scale: 1, opacity: 1 }

    return (
        <section
            ref={sectionRef}
            className="spheres"
            id="activities"
            style={sectionStyle}
        >
            <div className="container">
                <ScrollReveal>
                    <h2 className="spheres-title">{t("spheres.sectionTitle")}</h2>
                </ScrollReveal>
                <ul className="spheres-list">
                    {spheres.map((sphere, index) => (
                        <motion.li
                            className={clsx(
                                "spheres-list__item",
                                activeSphere === sphere.id && "spheres-list__item--active",
                            )}
                            key={sphere.id}
                            style={sphereListItemStyle(activeSphere, sphere.id)}
                            initial={listItemHidden}
                            whileInView={listItemVisible}
                            viewport={VIEWPORT_DEFAULT}
                            transition={revealTransition(index * STAGGER_STEP_S)}
                            onClick={() => setActiveSphere(sphere.id)}
                        >
                            <motion.span
                                className="spheres-list__icon-wrap"
                                initial={iconHidden}
                                whileInView={iconVisible}
                                whileHover={reduce ? undefined : { scale: ICON_HOVER_SCALE }}
                                viewport={VIEWPORT_DEFAULT}
                                transition={
                                    reduce
                                        ? { duration: 0 }
                                        : {
                                              type: "spring",
                                              stiffness: ICON_SPRING_STIFFNESS,
                                              damping: ICON_SPRING_DAMPING,
                                              delay:
                                                  index * STAGGER_STEP_S + ICON_REVEAL_DELAY_S,
                                          }
                                }
                            >
                                <SphereTabIcon className="spheres-list__icon" />
                            </motion.span>
                            <span className="spheres-list__label">{sphere.title}</span>
                        </motion.li>
                    ))}
                </ul>
                <ScrollReveal delay={0.1}>
                    <div className="spheres-content">
                        <AnimatePresence mode="wait">
                            {spheres
                                .filter((sphere) => sphere.id === activeSphere)
                                .map((sphere) => (
                                    <motion.div
                                        key={sphere.id}
                                        className="spheres-content__panel"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: reduce ? 0 : SPHERE_CONTENT_CROSSFADE_S,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <Shpera {...sphere} cardTheme={cardTheme} />
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
