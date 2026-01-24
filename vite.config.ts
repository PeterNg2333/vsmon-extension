import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [preact()],
    root: 'src/view',
    build: {
        outDir: '../../out/view-dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/view/src')
        }
    }
});
