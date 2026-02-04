import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/semihenser.github.io/', // EĞER REPO ADIN FARKLIYSA BURAYI DEĞİŞTİR
})