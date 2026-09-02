import { defineConfig, type UserConfig } from 'vite'
import type { ViteReactSSGOptions } from 'vite-react-ssg'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

type ViteReactSSGConfig = UserConfig & {
  ssgOptions?: Partial<ViteReactSSGOptions>
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    dirStyle: 'nested',
  },
} satisfies ViteReactSSGConfig)
