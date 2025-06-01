import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro']
          }
        }
      }
    },
    ssr: {
      noExternal: ['sharp']
    }
  }
});