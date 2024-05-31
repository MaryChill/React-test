import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // root: './src',
  // base: '/',
  // publicDir: '../public',
  // build: {
  //     rollupOptions: {
  //         input: {
  //             main: 'src/index.html',
  //         }
  //     },
  //     outDir: '../dist',
  // },
  // css: {
  //     devSourcemap: true
  // },
  plugins: [react()],
})
