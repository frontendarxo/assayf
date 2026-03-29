import { clsx } from "clsx"
import { motion, useReducedMotion } from "framer-motion"
import { useMemo, useState } from "react"

import { Shpera, type ShperaCardTheme } from "../../components/shpera"
import spheresImage from "../../assets/sphere-logos.svg"
import { getLocalizedSpheres } from "../../data/spheres"
import { useLanguage } from "../../i18n/useLanguage"
import {
    REVEAL_OFFSET_PX,
    STAGGER_STEP_S,
    VIEWPORT_DEFAULT,
    revealTransition,
} from "../../shared/motion/reveal"
import { ScrollReveal } from "../../shared/scroll-reveal"
import "./style.css"

const SPHERE_ACTIVE_BACKGROUND: Record<number, string> = {
    1: "#161A1D",
    2: "#123430",
    3: "#602026",
    4: "#182E44",
    5: "#AEAEAE",
}

const SPHERES_TEXT_ON_DARK_BG = "#AEAEAE"
const SPHERES_TEXT_ON_LIGHT_BG = "#161A1D"
const DARK_BG_LUMINANCE_THRESHOLD = 0.4

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
    const reduce = useReducedMotion()

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

    return (
        <section className="spheres" id="activities" style={sectionStyle}>
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
                            <img src={spheresImage} alt={sphere.title} />
                            {sphere.title}
                        </motion.li>
                    ))}
                </ul>
                <ScrollReveal delay={0.1}>
                    <div className="spheres-content">
                        {spheres
                            .filter((sphere) => sphere.id === activeSphere)
                            .map((sphere) => (
                                <Shpera key={sphere.id} {...sphere} cardTheme={cardTheme} />
                            ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
