import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Frontend-Detective-Portfolio/',
  plugins: [react()],
  server: {
    port: 4173,
  },
  build: {
    sourcemap: false,
  },
});
