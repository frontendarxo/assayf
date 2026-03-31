import type { ImgHTMLAttributes } from "react"

const DEFAULT_DECODING: NonNullable<ImgHTMLAttributes<HTMLImageElement>["decoding"]> =
    "async"

export type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    /** LCP / above the fold: eager load and higher fetch priority */
    priority?: boolean
}

export function OptimizedImage({
    priority = false,
    loading,
    decoding = DEFAULT_DECODING,
    fetchPriority,
    ...rest
}: OptimizedImageProps) {
    const resolvedLoading = loading ?? (priority ? "eager" : "lazy")
    const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : undefined)

    return (
        <img
            loading={resolvedLoading}
            decoding={decoding}
            fetchPriority={resolvedFetchPriority}
            {...rest}
        />
    )
}
