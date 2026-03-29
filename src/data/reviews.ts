import type { Review } from "../types/spehera"

const reviewAuthors: Pick<Review, "id" | "name">[] = [
    { id: 1, name: "@salamov.ms" },
    { id: 2, name: "@dovlet_abdullayev" },
    { id: 3, name: "@iznaur_18" },
    { id: 4, name: "@talashov_rashid" },
]

export function getLocalizedReviews(t: (path: string) => string): Review[] {
    return reviewAuthors.map((author) => ({
        ...author,
        text: t(`reviews.items.${author.id}`),
    }))
}
