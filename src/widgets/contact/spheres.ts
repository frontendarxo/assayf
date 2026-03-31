export type SphereId =
    | "china"
    | "logistics"
    | "assayf_product"
    | "export_import"
    | "valut"
    | "general"

export type SphereContactRow = {
    id: SphereId
    whatsappDigits: string
    whatsappDisplay: string
    instagramHandle: string
}

export const MAIN_TELEGRAM_USER = "assayf_company"

/** Digits only for tel: and wa.me */
export const digitsForTel = (digits: string) => digits.replace(/\D/g, "")

export const CONTACT_SPHERES: readonly SphereContactRow[] = [
    {
        id: "china",
        whatsappDigits: "79631122801",
        whatsappDisplay: "+7 (963) 112-28-01",
        instagramHandle: "assayf_china",
    },
    {
        id: "logistics",
        whatsappDigits: "905362050371",
        whatsappDisplay: "+905362050371",
        instagramHandle: "assayf_cargo",
    },
    {
        id: "assayf_product",
        whatsappDigits: "905362050371",
        whatsappDisplay: "+905362050371",
        instagramHandle: "assayf_mass",
    },
    {
        id: "export_import",
        whatsappDigits: "79344445040",
        whatsappDisplay: "+79344445040",
        instagramHandle: "assayf_products",
    },
    {
        id: "valut",
        whatsappDigits: "79638384444",
        whatsappDisplay: "+7 (963) 838-44-44",
        instagramHandle: "valut_assayf",
    },
    {
        id: "general",
        whatsappDigits: "79344445040",
        whatsappDisplay: "+79344445040",
        instagramHandle: "assayf1",
    },
]
