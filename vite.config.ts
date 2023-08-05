/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react(), eslint()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    server: {
        open: true,
        host: '0.0.0.0'
    },
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer]
        }
    },
    test: {
        globals: true,
        environment: 'jsdom'
    }
});
