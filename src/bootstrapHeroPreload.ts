import heroBgUrl from "./assets/img/hero-bg.png"

function shouldAvoidHeavyHeroBackground(): boolean {
    if (typeof navigator === "undefined") return false
    const connection = (
        navigator as unknown as {
            connection?: { saveData?: boolean; effectiveType?: string }
        }
    ).connection

    if (!connection) return false
    if (connection.saveData) return true
    return connection.effectiveType === "2g" || connection.effectiveType === "slow-2g"
}

if (shouldAvoidHeavyHeroBackground()) {
    // Экономим трафик для Save-Data/2G: hero фон будет однотонным
} else {
const link = document.createElement("link")
link.rel = "preload"
link.as = "image"
link.href = heroBgUrl
link.setAttribute("fetchpriority", "high")
document.head.appendChild(link)
}
