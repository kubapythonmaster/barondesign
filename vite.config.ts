import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/barondesign/',
  build: {
    target: 'es2020',
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
})
