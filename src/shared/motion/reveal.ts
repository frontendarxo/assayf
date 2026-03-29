export const REVEAL_DURATION_S = 0.52
export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const
export const REVEAL_OFFSET_PX = 36
export const STAGGER_STEP_S = 0.07
export const HEADER_STAGGER_S = 0.11
export const HEADER_CHILD_DELAY_S = 0.06
export const HEADER_FADE_DURATION_S = 0.42

export const VIEWPORT_DEFAULT = {
    once: true,
    amount: 0.22,
    margin: "-72px 0px -72px 0px",
} as const

export function revealTransition(delay = 0) {
    return {
        duration: REVEAL_DURATION_S,
        ease: REVEAL_EASE,
        delay,
    } as const
}
