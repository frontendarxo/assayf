import type { Sphere, SphereImageSource } from "../types/spehera"
import cargoImage from "../assets/img/cargo.jpeg"
import valutImage from "../assets/img/valut.jpeg"
import productImage from "../assets/img/assayf-product-img.jpeg"
import exportImage from "../assets/img/export.jpeg"
import chinaImage from "../assets/img/china.jpeg"

export type SphereSlug = "cargo" | "valut" | "china" | "product" | "export"

type SphereDefinition = {
    id: number
    slug: SphereSlug
    title: string
    cases: { id: number }[]
    images: { id: number; image: SphereImageSource }[]
}

const sphereDefinitions: SphereDefinition[] = [
    {
        id: 1,
        slug: "cargo",
        title: "Cargo",
        cases: [{ id: 1 }, { id: 2 }, { id: 3 }],
        images: [{ id: 1, image: cargoImage }],
    },
    {
        id: 2,
        slug: "valut",
        title: "Valut",
        cases: [{ id: 1 }, { id: 2 }, { id: 3 }],
        images: [{ id: 1, image: valutImage }],
    },
    {
        id: 3,
        slug: "china",
        title: "China",
        cases: [{ id: 1 }, { id: 2 }, { id: 3 }],
        images: [{ id: 1, image: chinaImage }],
    },
    {
        id: 4,
        slug: "product",
        title: "Product",
        cases: [{ id: 1 }, { id: 2 }, { id: 3 }],
        images: [{ id: 1, image: productImage }],
    },
    {
        id: 5,
        slug: "export",
        title: "Export",
        cases: [{ id: 1 }, { id: 2 }, { id: 3 }],
        images: [{ id: 1, image: exportImage }],
    },
]

export function getLocalizedSpheres(t: (path: string) => string): Sphere[] {
    return sphereDefinitions.map((def) => ({
        id: def.id,
        title: def.title,
        subtitle: t(`sphere.${def.slug}.subtitle`),
        description: t(`sphere.${def.slug}.description`),
        cases: def.cases.map((c) => ({
            id: c.id,
            title: t(`sphere.${def.slug}.cases.${c.id}`),
        })),
        images: def.images,
    }))
}
