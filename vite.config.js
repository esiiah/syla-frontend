import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/, // process .js files in src/ as JSX
  },
  build: {
    outDir: 'dist',       // Vite default, matches Render publish directory
    emptyOutDir: true,    // Clear dist/ before building
    sourcemap: false,     // Optional: remove source maps in production
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional shortcut for imports
    },
  },
})
