import type { Review } from "../types/spehera"

const REVIEW_IDS: Review["id"][] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
]

export function getLocalizedReviews(t: (path: string) => string): Review[] {
    return REVIEW_IDS.map((id) => ({
        id,
        text: t(`reviews.items.${id}`),
    }))
}
