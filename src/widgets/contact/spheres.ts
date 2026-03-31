export type SphereId =
    | "china"
    | "logistics"
    | "assayf_product"
    | "export_import"
    | "valut"

export type SphereContactRow = {
    id: SphereId
    whatsappDigits: string
    instagramHandle: string
}

export const MAIN_TELEGRAM_USER = "assayf_company"

/** Digits only for tel: and wa.me */
export const digitsForTel = (digits: string) => digits.replace(/\D/g, "")

/** Длина E.164 без «+»: РФ 7XXXXXXXXXX, Турция 90XXXXXXXXXX */
const RU_E164_DIGITS_LEN = 11
const TR_E164_DIGITS_LEN = 12

/**
 * Отображение номера для UI: РФ — +7 XXX XXX XX XX, Турция — +90 XXX XXX XX XX.
 * Ссылки wa.me по-прежнему используют {@link digitsForTel}.
 */
export function formatPhoneForDisplay(rawDigits: string): string {
    const d = digitsForTel(rawDigits)
    if (d.length === RU_E164_DIGITS_LEN && d.startsWith("7")) {
        const n = d.slice(1)
        return `+7 ${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6, 8)} ${n.slice(8, 10)}`
    }
    if (d.length === TR_E164_DIGITS_LEN && d.startsWith("90")) {
        const n = d.slice(2)
        return `+90 ${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6, 8)} ${n.slice(8, 10)}`
    }
    if (d.length > 0) {
        return `+${d}`
    }
    return ""
}

/** Соответствие id вкладки «Сферы деятельности» (1–5) и ключа контактов внизу страницы */
export const ACTIVITY_SPHERE_ID_TO_CONTACT = {
    1: "logistics",
    2: "china",
    3: "valut",
    4: "assayf_product",
    5: "export_import",
} as const satisfies Record<number, SphereId>

export function getContactSphereIdForActivity(activitySphereId: number): SphereId {
    const mapped =
        ACTIVITY_SPHERE_ID_TO_CONTACT[
            activitySphereId as keyof typeof ACTIVITY_SPHERE_ID_TO_CONTACT
        ]
    if (!mapped) {
        throw new Error(`Unknown activity sphere id: ${activitySphereId}`)
    }
    return mapped
}

export const CONTACT_SPHERES: readonly SphereContactRow[] = [
    {
        id: "china",
        whatsappDigits: "79631122801",
        instagramHandle: "assayf_china",
    },
    {
        id: "logistics",
        whatsappDigits: "905362050371",
        instagramHandle: "assayf_cargo",
    },
    {
        id: "assayf_product",
        whatsappDigits: "905362050371",
        instagramHandle: "assayf_mass",
    },
    {
        id: "export_import",
        whatsappDigits: "79344445040",
        instagramHandle: "assayf_products",
    },
    {
        id: "valut",
        whatsappDigits: "79638384444",
        instagramHandle: "valut_assayf",
    },
]
