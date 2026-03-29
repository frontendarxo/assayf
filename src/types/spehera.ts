/** Vite: URL string. Next.js: `import` картинки → объект с полем `src`. */
export type SphereImageSource = string | { src: string }

export type Sphere = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    cases: {
        id: number;
        title: string;
    }[];
    images: {
        id: number;
        image: SphereImageSource;
    }[];
}

export type Review = {
    id: number;
    name: string;
    text: string;
}