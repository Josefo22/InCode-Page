import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    html: {
      inject: {
        charset: 'UTF-8',
      },
    },
  },
})
