import { useCallback, useMemo, useState, type ImgHTMLAttributes } from "react"

const DEFAULT_DECODING: NonNullable<ImgHTMLAttributes<HTMLImageElement>["decoding"]> =
    "async"

type ImageStatus = "loading" | "loaded" | "error"

export type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    /** LCP / above the fold: eager load and higher fetch priority */
    priority?: boolean
    /** Optional fallback image if the main src fails */
    fallbackSrc?: string
}

export function OptimizedImage({
    priority = false,
    loading,
    decoding = DEFAULT_DECODING,
    fetchPriority,
    fallbackSrc,
    src,
    onLoad,
    onError,
    className,
    ...rest
}: OptimizedImageProps) {
    const [currentSrc, setCurrentSrc] = useState(src)
    const [status, setStatus] = useState<ImageStatus>("loading")

    const resolvedLoading = loading ?? (priority ? "eager" : "lazy")
    const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : undefined)

    const resolvedClassName = useMemo(() => {
        const base = "optimized-image"
        return className ? `${base} ${className}` : base
    }, [className])

    const handleLoad = useCallback<NonNullable<ImgHTMLAttributes<HTMLImageElement>["onLoad"]>>(
        (e) => {
            setStatus("loaded")
            onLoad?.(e)
        },
        [onLoad],
    )

    const handleError = useCallback<
        NonNullable<ImgHTMLAttributes<HTMLImageElement>["onError"]>
    >(
        (e) => {
            if (fallbackSrc && currentSrc !== fallbackSrc) {
                setCurrentSrc(fallbackSrc)
                setStatus("loading")
                return
            }
            setStatus("error")
            onError?.(e)
        },
        [currentSrc, fallbackSrc, onError],
    )

    return (
        <img
            loading={resolvedLoading}
            decoding={decoding}
            fetchPriority={resolvedFetchPriority}
            src={currentSrc}
            className={resolvedClassName}
            data-img-status={status}
            onLoad={handleLoad}
            onError={handleError}
            {...rest}
        />
    )
}
