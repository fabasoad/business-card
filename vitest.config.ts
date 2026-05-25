import path from 'path'
import type { Plugin } from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

function assetStub(): Plugin {
  const ASSET_RE = /\.(png|jpe?g|gif|svg|webp|ttf|woff2?|eot|otf|pdf|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/
  const STYLE_RE = /\.(css|scss)(\?.*)?$/
  return {
    name: 'vitest-asset-stub',
    enforce: 'pre',
    resolveId(id) {
      if (ASSET_RE.test(id)) return `\0asset-stub:${id}`
      if (STYLE_RE.test(id)) return `\0style-stub:${id}`
    },
    load(id) {
      if (id.startsWith('\0asset-stub:')) return `export default 'test-file-stub'`
      if (id.startsWith('\0style-stub:')) return `export default {}`
    }
  }
}

export default defineConfig({
  plugins: [react(), assetStub()],
  resolve: {
    alias: {
      'react-i18next': path.resolve(__dirname, 'src/__tests__/__mocks__/react-i18next.tsx')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    clearMocks: true,
    setupFiles: ['./src/__tests__/setup.ts'],
    include: ['src/__tests__/**/*.{spec,test}.{ts,tsx}'],
    exclude: ['src/__tests__/TestUtils.spec.ts', '**/node_modules/**'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['**/*.d.ts', '**/node_modules/**'],
      reporter: ['lcov', 'text', 'text-summary'],
      thresholds: {
        branches: 85,
        functions: 70,
        lines: 70,
        statements: 70
      }
    }
  }
})
