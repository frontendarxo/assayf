/** Vite: URL string. Next.js: `import` картинки → объект с полем `src`. */
export type SphereImageSource = string | { src: string }

export type SphereSection = {
    heading: string | null
    body: string
}

export type SphereCase = {
    id: number
    title: string
    detail: string
}

export type Sphere = {
    id: number
    title: string
    subtitle: string
    lead: string
    description: string
    sections: SphereSection[]
    cases: SphereCase[]
    cta: string
    images: {
        id: number
        image: SphereImageSource
    }[]
}

export type Review = {
    id: number;
    name: string;
    text: string;
}