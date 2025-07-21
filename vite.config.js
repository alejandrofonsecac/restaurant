import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),          // Página principal
        cardapio: resolve(__dirname, 'cardapio/cardapio.html') // Página do cardápio
      }
    },
    outDir: 'dist'
  },
  server: {
    port: 3000
  }
});