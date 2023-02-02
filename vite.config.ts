import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unocss({
    presets: [
      presetUno(),
      presetAttributify(),
    ],
  })],
  server: {
    hmr: true,
    watch: { usePolling: true },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  define: {
    'process.env': {
      ...process.env,
      ...loadEnv('development', process.cwd()),
    },
  },
})
