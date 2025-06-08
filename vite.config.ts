import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://sklinkusch.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/Components'),
      '@context': path.resolve(__dirname, './src/Context'),
      '@images': path.resolve(__dirname, './src/images'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  build: { outDir: 'dist' },
});
