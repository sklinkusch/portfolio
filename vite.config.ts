import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: { open: true, port: 3000 },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/Components'),
      '@context': path.resolve(__dirname, './src/Context'),
      '@images': path.resolve(__dirname, './src/images'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  build: { outDir: 'build' },
});
