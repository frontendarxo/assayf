import { motion, useReducedMotion } from "framer-motion"
import { Hero } from "../../components/hero"
import { useLanguage } from "../../i18n/useLanguage"
import { Button } from "../../shared/button"
import {
    HEADER_CHILD_DELAY_S,
    HEADER_FADE_DURATION_S,
    HEADER_STAGGER_S,
    REVEAL_DURATION_S,
    REVEAL_EASE,
    revealTransition,
} from "../../shared/motion/reveal"
import "./style.css"

export const Header = () => {
    const { t } = useLanguage()
    const reduce = useReducedMotion()

    const blockHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }
    const blockVisible = { opacity: 1, y: 0 }

    const ctaHidden = reduce
        ? { opacity: 1, y: 0, x: "-50%" }
        : { opacity: 0, y: 32, x: "-50%" }
    const ctaVisible = { opacity: 1, y: 0, x: "-50%" }

    return (
        <motion.header
            id="home"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: HEADER_FADE_DURATION_S,
                ease: REVEAL_EASE,
            }}
        >
            <div className="container">
                <motion.div
                    className="header-content"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: HEADER_STAGGER_S,
                                delayChildren: HEADER_CHILD_DELAY_S,
                            },
                        },
                    }}
                >
                    <motion.div
                        variants={{
                            hidden: blockHidden,
                            visible: {
                                ...blockVisible,
                                transition: revealTransition(0),
                            },
                        }}
                    >
                        <Hero />
                    </motion.div>
                    <motion.div
                        className="header-cta-wrap"
                        variants={{
                            hidden: ctaHidden,
                            visible: {
                                ...ctaVisible,
                                transition: {
                                    duration: REVEAL_DURATION_S,
                                    ease: REVEAL_EASE,
                                },
                            },
                        }}
                    >
                        <Button text={t("header.discussProject")} className="header-button" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.header>
    )
}
