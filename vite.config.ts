import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import FullReload from 'vite-plugin-full-reload'

const port = 3000

export default defineConfig({
  plugins: [
    solid(),
    FullReload(['src/lib/*']),
  ],
  build: {
    outDir: 'docs',
  },
  server: { port },
  preview: { port },
  css: {
    devSourcemap: true,
  },
})
