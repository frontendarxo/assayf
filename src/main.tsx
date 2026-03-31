import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./bootstrapHeroPreload"
import { ContactSphereProvider } from "./contexts/ContactSphereContext"
import { LanguageProvider } from "./i18n/LanguageProvider"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LanguageProvider>
            <ContactSphereProvider>
                <App />
            </ContactSphereProvider>
        </LanguageProvider>
    </StrictMode>,
)
