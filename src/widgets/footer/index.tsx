import { motion, useReducedMotion } from "framer-motion"

import logo from "../../assets/logo.svg"
import { siteNavItemDefs } from "../../data/navigation"
import { useLanguage } from "../../i18n/useLanguage"
import { BrandSpan } from "../../shared/brand-typography"
import {
    REVEAL_OFFSET_PX,
    STAGGER_STEP_S,
    VIEWPORT_DEFAULT,
    revealTransition,
} from "../../shared/motion/reveal"

import "./style.css"

const CURRENT_YEAR = new Date().getFullYear()

export const Footer = () => {
    const { t } = useLanguage()
    const reduce = useReducedMotion()
    const blockHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: REVEAL_OFFSET_PX }
    const blockVisible = { opacity: 1, y: 0 }
    const linkHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }

    return (
        <footer className="footer">
            <motion.div
                className="container footer-inner"
                initial={blockHidden}
                whileInView={blockVisible}
                viewport={VIEWPORT_DEFAULT}
                transition={revealTransition(0)}
            >
                <div className="footer-top">
                    <div className="footer-brand">
                        <a className="footer-logo-link" href="#home" aria-label={t("footer.logoAria")}>
                            <img src={logo} alt="" className="footer-logo" />
                        </a>
                        <p className="footer-tagline">{t("footer.tagline")}</p>
                    </div>
                    <motion.ul
                        className="footer-nav"
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT_DEFAULT}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: STAGGER_STEP_S, delayChildren: 0.08 },
                            },
                        }}
                    >
                        {siteNavItemDefs.map((item) => (
                            <motion.li
                                key={item.href}
                                variants={{
                                    hidden: linkHidden,
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: revealTransition(0),
                                    },
                                }}
                            >
                                <a href={item.href}>{t(item.messageKey)}</a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                <p className="footer-bottom">
                    © {CURRENT_YEAR}{" "}
                    <BrandSpan>{t("footer.copyright")}</BrandSpan>
                </p>
            </motion.div>
        </footer>
    )
}
