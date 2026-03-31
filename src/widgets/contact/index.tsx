import { Send } from "lucide-react"
import { type FormEvent, useCallback, useMemo, useState } from "react"

import { useLanguage } from "../../i18n/useLanguage"
import { BrandSpan } from "../../shared/brand-typography"
import { ScrollReveal } from "../../shared/scroll-reveal"

import "./style.css"

const CONTACT_ICON_SIZE = 20
const CONTACT_ICON_STROKE = 2

const ContactWhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width={CONTACT_ICON_SIZE}
        height={CONTACT_ICON_SIZE}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

const ContactInstagramIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width={CONTACT_ICON_SIZE}
        height={CONTACT_ICON_SIZE}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={CONTACT_ICON_STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
)

type ContactChannel = "whatsapp" | "telegram" | "email"

const PHONE_DISPLAY = "89344445040"
const PHONE_WHATSAPP = "79344445040"
const INSTAGRAM_USER = "assayf1"
const TELEGRAM_DISPLAY = "@fulanibnfula"
const TELEGRAM_USER = "fulanibnfula"

const buildFeedbackBody = (
    contactValue: string,
    message: string,
    channelLabel: string,
    feedbackHeader: string,
    feedbackHowContact: string,
    feedbackMessage: string,
) => {
    const lines = [feedbackHeader, `${feedbackHowContact}: ${channelLabel}`, contactValue.trim()]
    const trimmedMessage = message.trim()
    if (trimmedMessage) {
        lines.push("", `${feedbackMessage}:`, trimmedMessage)
    }
    return lines.join("\n")
}

const openWhatsAppWithText = (text: string) => {
    const url = `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
}

export const Contact = () => {
    const { t } = useLanguage()
    const [channel, setChannel] = useState<ContactChannel>("whatsapp")
    const [contactValue, setContactValue] = useState("")
    const [message, setMessage] = useState("")
    const [showMessageField, setShowMessageField] = useState(false)

    const channelLabel = useMemo(
        (): Record<ContactChannel, string> => ({
            whatsapp: t("contact.channels.whatsapp"),
            telegram: t("contact.channels.telegram"),
            email: t("contact.channels.email"),
        }),
        [t],
    )

    const placeholder = useMemo(
        (): Record<ContactChannel, string> => ({
            whatsapp: t("contact.placeholders.whatsapp"),
            telegram: t("contact.placeholders.telegram"),
            email: t("contact.placeholders.email"),
        }),
        [t],
    )

    const hideMessageField = useCallback(() => {
        setShowMessageField(false)
        setMessage("")
    }, [])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const body = buildFeedbackBody(
            contactValue,
            message,
            channelLabel[channel],
            t("contact.feedbackHeader"),
            t("contact.feedbackHowContact"),
            t("contact.feedbackMessage"),
        )
        openWhatsAppWithText(body)
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <ScrollReveal>
                    <h2 className="contact-title">{t("contact.sectionTitle")}</h2>
                </ScrollReveal>
                <div className="contact-layout">
                    <ScrollReveal className="contact-info-wrap" direction="right">
                        <ul className="contact-info">
                            <li className="contact-info-item contact-info-item--whatsapp">
                                <span className="contact-info-icon-wrap" aria-hidden>
                                    <ContactWhatsAppIcon />
                                </span>
                                <div className="contact-info-text">
                                    <span className="contact-info-label">WhatsApp</span>
                                    <a className="contact-info-link" href={`tel:+${PHONE_WHATSAPP}`}>
                                        {PHONE_DISPLAY}
                                    </a>
                                </div>
                            </li>
                            <li className="contact-info-item contact-info-item--instagram">
                                <span className="contact-info-icon-wrap" aria-hidden>
                                    <ContactInstagramIcon />
                                </span>
                                <div className="contact-info-text">
                                    <span className="contact-info-label">Instagram</span>
                                    <a
                                        className="contact-info-link"
                                        href={`https://www.instagram.com/${INSTAGRAM_USER}/`}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <BrandSpan>{INSTAGRAM_USER}</BrandSpan>
                                    </a>
                                </div>
                            </li>
                            <li className="contact-info-item contact-info-item--telegram">
                                <span className="contact-info-icon-wrap" aria-hidden>
                                    <Send size={CONTACT_ICON_SIZE} strokeWidth={CONTACT_ICON_STROKE} />
                                </span>
                                <div className="contact-info-text">
                                    <span className="contact-info-label">Telegram</span>
                                    <a
                                        className="contact-info-link"
                                        href={`https://t.me/${TELEGRAM_USER}`}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <BrandSpan>{TELEGRAM_DISPLAY}</BrandSpan>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal className="contact-form-wrap" direction="left" delay={0.08}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <fieldset className="contact-type">
                                <legend className="contact-type-legend">{t("contact.formLegend")}</legend>
                                <div className="contact-type-options">
                                    {(["whatsapp", "telegram", "email"] as const).map((value) => (
                                        <label key={value} className="contact-type-option">
                                            <input
                                                type="radio"
                                                name="contact-channel"
                                                value={value}
                                                checked={channel === value}
                                                onChange={() => setChannel(value)}
                                            />
                                            {channelLabel[value]}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                            <label className="contact-field">
                                <span className="contact-field-label">{t("contact.fieldContact")}</span>
                                <input
                                    className="contact-input"
                                    name="contact-value"
                                    value={contactValue}
                                    onChange={(e) => setContactValue(e.target.value)}
                                    placeholder={placeholder[channel]}
                                    required
                                    autoComplete={channel === "email" ? "email" : "on"}
                                    inputMode={
                                        channel === "whatsapp"
                                            ? "tel"
                                            : channel === "email"
                                              ? "email"
                                              : "text"
                                    }
                                />
                            </label>
                            {!showMessageField ? (
                                <button
                                    type="button"
                                    className="contact-add-message"
                                    onClick={() => setShowMessageField(true)}
                                >
                                    {t("contact.addMessage")}
                                </button>
                            ) : (
                                <div className="contact-optional-message">
                                    <label className="contact-field">
                                        <span className="contact-field-label">{t("contact.messageLabel")}</span>
                                        <textarea
                                            className="contact-textarea"
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder={t("contact.messagePlaceholder")}
                                            rows={5}
                                        />
                                    </label>
                                    <button type="button" className="contact-remove-message" onClick={hideMessageField}>
                                        {t("contact.removeMessage")}
                                    </button>
                                </div>
                            )}
                            <button className="button contact-submit" type="submit">
                                {t("contact.submit")}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
