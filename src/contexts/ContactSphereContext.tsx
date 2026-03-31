import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react"

import type { SphereId } from "../widgets/contact/spheres"

type ContactSphereContextValue = {
    pendingContactSphereId: SphereId | null
    openContactWithSphere: (sphereId: SphereId) => void
    clearPendingContactSphere: () => void
}

const ContactSphereContext = createContext<ContactSphereContextValue | null>(null)

export function ContactSphereProvider({ children }: { children: ReactNode }) {
    const [pendingContactSphereId, setPendingContactSphereId] = useState<SphereId | null>(
        null,
    )

    const openContactWithSphere = useCallback((sphereId: SphereId) => {
        setPendingContactSphereId(sphereId)
        queueMicrotask(() => {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        })
    }, [])

    const clearPendingContactSphere = useCallback(() => {
        setPendingContactSphereId(null)
    }, [])

    const value = useMemo(
        (): ContactSphereContextValue => ({
            pendingContactSphereId,
            openContactWithSphere,
            clearPendingContactSphere,
        }),
        [pendingContactSphereId, openContactWithSphere, clearPendingContactSphere],
    )

    return (
        <ContactSphereContext.Provider value={value}>{children}</ContactSphereContext.Provider>
    )
}

export function useContactSphere(): ContactSphereContextValue {
    const ctx = useContext(ContactSphereContext)
    if (!ctx) {
        throw new Error("useContactSphere must be used within ContactSphereProvider")
    }
    return ctx
}
