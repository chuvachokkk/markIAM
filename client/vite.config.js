import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	base: '/markIAM/',
	plugins: [react()],
	server: {
		port: 5173,
		open: true,
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
	},
})
