import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/iga-extremo-sul",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
