import { defineConfig } from '@playwright/test'

const PORT = 4173

export default defineConfig({
  testDir: './e2e',
  timeout: 60 * 1000,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`
  },
  webServer: {
    command:
      `pnpm run build:prod && pnpm exec vite preview --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  }
})
