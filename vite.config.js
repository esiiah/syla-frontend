import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // This ensures all .js files are treated as JSX during build
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/ // .js, .jsx, .ts, .tsx
  },
})
