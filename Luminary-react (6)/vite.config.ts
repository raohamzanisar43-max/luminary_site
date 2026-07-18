import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/images/WhatsApp Image 2026-07-18 at 2.29.51 PM.jpeg']
    }
  }
})
