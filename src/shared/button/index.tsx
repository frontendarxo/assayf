import type { ReactNode } from "react"

import "./style.css"

interface ButtonProps {
    text?: ReactNode
    children?: ReactNode
    className?: string
}

export const Button = ({ text, children, className = "" }: ButtonProps) => {
    const buttonClassName = `button ${className}`.trim()
    const content = children ?? text

    return (
        <button className={buttonClassName} type="button">
            {content}
        </button>
    )
}

export default Button