import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import {
    REVEAL_OFFSET_PX,
    VIEWPORT_DEFAULT,
    revealTransition,
} from "../motion/reveal"

export type RevealDirection = "up" | "down" | "left" | "right" | "fade"

type ScrollRevealProps = {
    children: ReactNode
    className?: string
    delay?: number
    direction?: RevealDirection
    amount?: number
}

function hiddenForDirection(direction: RevealDirection, reduce: boolean | null) {
    if (reduce) return { opacity: 1, x: 0, y: 0 }
    const d = REVEAL_OFFSET_PX
    switch (direction) {
        case "up":
            return { opacity: 0, y: d }
        case "down":
            return { opacity: 0, y: -d }
        case "left":
            return { opacity: 0, x: d }
        case "right":
            return { opacity: 0, x: -d }
        case "fade":
        default:
            return { opacity: 0, x: 0, y: 0 }
    }
}

const visibleState = { opacity: 1, x: 0, y: 0 }

export function ScrollReveal({
    children,
    className,
    delay = 0,
    direction = "up",
    amount,
}: ScrollRevealProps) {
    const reduce = useReducedMotion()
    const viewport =
        amount != null ? { ...VIEWPORT_DEFAULT, amount } : VIEWPORT_DEFAULT

    return (
        <motion.div
            className={className}
            initial={hiddenForDirection(direction, reduce)}
            whileInView={visibleState}
            viewport={viewport}
            transition={revealTransition(delay)}
        >
            {children}
        </motion.div>
    )
}
