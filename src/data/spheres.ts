import type { Sphere, SphereImageSource, SphereSection } from "../types/spehera"
import cargoImage from "../assets/img/cargo.jpeg"
import valutImage from "../assets/img/valut.jpeg"
import productImage from "../assets/img/assayf-product-img.jpeg"
import exportImage from "../assets/img/export.jpeg"
import chinaImage from "../assets/img/china.jpeg"

export type SphereSlug = "cargo" | "china" | "valut" | "product" | "export"

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
        title: "CARGO",
        cases: [{ id: 1 }, { id: 2 }, { id: 3 }],
        images: [{ id: 1, image: cargoImage }],
    },
    {
        id: 2,
        slug: "china",
        title: "CHINA",
        cases: [],
        images: [{ id: 1, image: chinaImage }],
    },
    {
        id: 3,
        slug: "valut",
        title: "VALUT",
        cases: [],
        images: [{ id: 1, image: valutImage }],
    },
    {
        id: 4,
        slug: "product",
        title: "PRODUCT",
        cases: [],
        images: [{ id: 1, image: productImage }],
    },
    {
        id: 5,
        slug: "export",
        title: "EXPORT",
        cases: [],
        images: [{ id: 1, image: exportImage }],
    },
]

type SectionKey =
    | "services"
    | "advantages"
    | "forWhom"
    | "geography"
    | "categories"
    | "currentProduct"
    | "plans"
    | "closingNote"

const SECTION_ORDER: Record<SphereSlug, readonly SectionKey[]> = {
    cargo: ["services", "advantages"],
    china: ["services", "forWhom", "advantages", "closingNote"],
    valut: ["services", "geography", "advantages"],
    product: ["currentProduct", "plans"],
    export: ["services", "categories"],
}

const SECTION_TITLE_PATH: Record<SectionKey, string | null> = {
    services: "spheres.servicesTitle",
    advantages: "spheres.advantagesTitle",
    forWhom: "spheres.forWhomTitle",
    geography: "spheres.geographyTitle",
    categories: "spheres.categoriesTitle",
    currentProduct: "spheres.currentProductTitle",
    plans: "spheres.plansTitle",
    closingNote: null,
}

function buildSections(slug: SphereSlug, t: (path: string) => string): SphereSection[] {
    const out: SphereSection[] = []
    for (const key of SECTION_ORDER[slug]) {
        const body = t(`sphere.${slug}.${key}`)
        if (!body.trim()) continue
        const titlePath = SECTION_TITLE_PATH[key]
        const heading = titlePath ? t(titlePath) : null
        out.push({ heading, body })
    }
    return out
}

export function getLocalizedSpheres(t: (path: string) => string): Sphere[] {
    return sphereDefinitions.map((def) => ({
        id: def.id,
        title: def.title,
        subtitle: t(`sphere.${def.slug}.subtitle`),
        lead: t(`sphere.${def.slug}.lead`),
        description: t(`sphere.${def.slug}.description`),
        sections: buildSections(def.slug, t),
        cases: def.cases.map((c) => ({
            id: c.id,
            title: t(`sphere.${def.slug}.cases.${c.id}.title`),
            detail: t(`sphere.${def.slug}.cases.${c.id}.detail`),
        })),
        cta: t(`sphere.${def.slug}.cta`),
        images: def.images,
    }))
}
