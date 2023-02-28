import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    globals: true,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
    threads: false,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
