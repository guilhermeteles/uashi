import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Landing em "/" e dashboard em "/admin" na mesma app SPA.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
