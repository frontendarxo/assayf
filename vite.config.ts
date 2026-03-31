import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
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
  ],
})
