import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [vue(), VitePWA({
	  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
	  manifest: {
		  name: 'DnD Překladač',
		  short_name: 'DnD Překladač',
		  description: 'Primitivní překladač vytvořený pro kamaráda',
		  theme_color: '#ffffff',
		  icons: [
			  {
				  src: 'android-chrome-192x192.png',
				  sizes: '192x192',
				  type: 'image/png',
			  },
			  {
				  src: 'android-chrome-512x512.png',
				  sizes: '512x512',
				  type: 'image/png',
			  },
			  {
				  src: 'android-chrome-512x512.png',
				  sizes: '512x512',
				  type: 'image/png',
				  purpose: 'any maskable',
			  }
		  ]
	  }
  })]
})
