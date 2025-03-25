import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',  // Treat .js files as JSX
    include: /\.(js|jsx)$/,  // Apply this to .js and .jsx files
  },
});
