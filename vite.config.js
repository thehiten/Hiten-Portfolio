import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use base path for GitHub Pages, root for Netlify
  base: process.env.NETLIFY ? '/' : '/Hiten-Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
