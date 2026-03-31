import type { ReactNode } from "react"

import "./style.css"

interface ButtonProps {
    text?: ReactNode
    children?: ReactNode
    className?: string
    href?: string
}

export const Button = ({ text, children, className = "", href }: ButtonProps) => {
    const buttonClassName = `button ${className}`.trim()
    const content = children ?? text

    if (href) {
        return (
            <a className={buttonClassName} href={href}>
                {content}
            </a>
        )
    }

    return (
        <button className={buttonClassName} type="button">
            {content}
        </button>
    )
}

export default Button