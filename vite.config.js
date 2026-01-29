import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'framer-motion': ['framer-motion'],
                    'icons': ['lucide-react', 'react-icons'],
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
});
