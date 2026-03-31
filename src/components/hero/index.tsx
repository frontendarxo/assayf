import { motion, useReducedMotion } from "framer-motion"

import logo from "../../assets/logo.svg"
import { useLanguage } from "../../i18n/useLanguage"
import { OptimizedImage } from "../../shared/optimized-image"
import { REVEAL_EASE, REVEAL_OFFSET_PX, REVEAL_DURATION_S } from "../../shared/motion/reveal"
import "./style.css"

const HERO_LINE_STAGGER_S = 0.14

export const Hero = () => {
    const { t } = useLanguage()
    const reduce = useReducedMotion()
    const lineHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: REVEAL_OFFSET_PX * 0.6 }
    const lineVariants = {
        hidden: lineHidden,
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: REVEAL_DURATION_S,
                ease: REVEAL_EASE,
            },
        },
    }

    return (
        <div className="hero">
            <motion.div
                className="hero-stack"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: HERO_LINE_STAGGER_S,
                            delayChildren: 0.05,
                        },
                    },
                }}
            >
                <motion.div className="hero-logo-row" variants={lineVariants}>
                    <a
                        className="hero-logo-link"
                        href="#home"
                        aria-label={t("footer.logoAria")}
                    >
                        <OptimizedImage src={logo} alt="" className="hero-logo" priority />
                    </a>
                </motion.div>
                <motion.h1 className="hero-title" variants={lineVariants}>
                    {t("hero.title")}
                </motion.h1>
            </motion.div>
        </div>
    )
}
