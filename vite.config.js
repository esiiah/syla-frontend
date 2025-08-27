import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // Ensure .js files in src/ are treated as JSX
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
  },

  // Set project root to current directory (where index.html is)
  root: path.resolve(__dirname),

  // Optional: customize build output for Render
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
