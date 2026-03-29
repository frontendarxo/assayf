import { motion, useReducedMotion } from "framer-motion"

import { useLanguage } from "../../i18n/useLanguage"
import { REVEAL_EASE, REVEAL_OFFSET_PX, REVEAL_DURATION_S } from "../../shared/motion/reveal"
import "./style.css"

const HERO_LINE_STAGGER_S = 0.14

export const Hero = () => {
    const { t } = useLanguage()
    const reduce = useReducedMotion()
    const lineHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: REVEAL_OFFSET_PX * 0.6 }

    return (
        <div className="hero">
            <motion.h1
                className="hero-title"
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
                <motion.span
                    variants={{
                        hidden: lineHidden,
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: REVEAL_DURATION_S,
                                ease: REVEAL_EASE,
                            },
                        },
                    }}
                >
                    {t("hero.title")}
                </motion.span>
            </motion.h1>
        </div>
    )
}
