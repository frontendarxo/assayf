export type SiteNavItemDef = {
    messageKey: string
    href: string
}

export const siteNavItemDefs: SiteNavItemDef[] = [
    { messageKey: "nav.home", href: "#home" },
    { messageKey: "nav.about", href: "#about" },
    { messageKey: "nav.activities", href: "#activities" },
    { messageKey: "nav.reviews", href: "#reviews" },
    { messageKey: "nav.contact", href: "#contact" },
]
