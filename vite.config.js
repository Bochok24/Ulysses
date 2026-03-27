import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this project from https://<user>.github.io/Ulysses/
  // so Vite needs the correct base path for asset URLs.
  base: '/Ulysses/',
  plugins: [react()],
});
