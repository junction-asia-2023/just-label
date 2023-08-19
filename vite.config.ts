import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { homepage } from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' && homepage,
  };
});
