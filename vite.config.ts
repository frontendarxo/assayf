import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const siteUrl = (env.VITE_SITE_URL ?? "").trim().replace(/\/$/, "")
  const mainPageUrl = siteUrl ? `${siteUrl}/#home` : "/#home"

  return {
    server: {
      allowedHosts: ['variably-pumped-chipmunk.cloudpub.ru'],
    },
    plugins: [
      tailwindcss(),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      ViteImageOptimizer({
        cache: true,
        cacheLocation: 'node_modules/.cache/vite-plugin-image-optimizer',
        logStats: true,
      }),
      {
        name: "inject-seo-main-page-url",
        transformIndexHtml(html) {
          return html.replaceAll("%SEO_MAIN_PAGE_URL%", mainPageUrl)
        },
      },
    ],
  }
})
