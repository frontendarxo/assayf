import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./bootstrapHeroPreload.ts"
import { ContactSphereProvider } from "./contexts/ContactSphereContext.tsx"
import { LanguageProvider } from "./i18n/LanguageProvider.tsx"
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
