import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/b6/": "http://localhost:4006",
      "/uploads/": "http://localhost:4006"
    }
  },
})
