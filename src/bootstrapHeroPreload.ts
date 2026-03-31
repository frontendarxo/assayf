import heroBgUrl from "./assets/img/hero-bg.png"

const link = document.createElement("link")
link.rel = "preload"
link.as = "image"
link.href = heroBgUrl
link.setAttribute("fetchpriority", "high")
document.head.appendChild(link)
