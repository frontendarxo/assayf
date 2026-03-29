import { useCallback, useEffect, useRef, useState } from "react"

import logo from "../../assets/logo.svg"
import { siteNavItemDefs } from "../../data/navigation"
import { useLanguage } from "../../i18n/useLanguage"
import { LanguageToggle } from "../../i18n/LanguageToggle"
import "./style.css"

const MOBILE_NAV_MAX_WIDTH_PX = 799
const NAV_STICKY_TOP_EPSILON_PX = 1
const NAV_STICKY_SCROLL_Y_THRESHOLD_PX = 1

export const Navbar = () => {
    const { t } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navRef = useRef<HTMLElement | null>(null)

    const closeMenu = useCallback(() => setIsMenuOpen(false), [])
    const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${MOBILE_NAV_MAX_WIDTH_PX}px)`)
        const handleViewport = () => {
            if (!mq.matches) closeMenu()
        }
        mq.addEventListener("change", handleViewport)
        return () => mq.removeEventListener("change", handleViewport)
    }, [closeMenu])

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMenu()
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [closeMenu])

    const handleNavLinkClick = () => {
        if (window.innerWidth <= MOBILE_NAV_MAX_WIDTH_PX) closeMenu()
    }

    const burgerClassName = `nav-burger${isMenuOpen ? " nav-burger--open" : ""}`
    const navListClassName = `nav-list${isMenuOpen ? " nav-list--open" : ""}`

    useEffect(() => {
        const navEl = navRef.current
        if (!navEl) return

        let stickyState = false
        let rafId: number | null = null

        const syncStickyClass = () => {
            rafId = null
            const isScrolled = window.scrollY > NAV_STICKY_SCROLL_Y_THRESHOLD_PX
            const isSticky = isScrolled && navEl.getBoundingClientRect().top <= NAV_STICKY_TOP_EPSILON_PX

            if (isSticky === stickyState) return
            stickyState = isSticky
            navEl.classList.toggle("navbar--sticky", stickyState)
        }

        const onScroll = () => {
            if (rafId != null) return
            rafId = window.requestAnimationFrame(syncStickyClass)
        }

        syncStickyClass()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)

        return () => {
            if (rafId != null) window.cancelAnimationFrame(rafId)
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [])

    return (
        <nav ref={navRef} className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="nav-end">
                <LanguageToggle />
                <button
                    type="button"
                    className={burgerClassName}
                    aria-expanded={isMenuOpen}
                    aria-controls="nav-menu"
                    aria-label={isMenuOpen ? t("navAria.closeMenu") : t("navAria.openMenu")}
                    onClick={toggleMenu}
                >
                    <span className="nav-burger-box" aria-hidden>
                        <span className="nav-burger-line" />
                        <span className="nav-burger-line" />
                        <span className="nav-burger-line" />
                    </span>
                </button>
                <ul id="nav-menu" className={navListClassName}>
                    {siteNavItemDefs.map((item) => (
                        <li key={item.href} className="nav-item">
                            <a href={item.href} onClick={handleNavLinkClick}>
                                {t(item.messageKey)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}