import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'; // Import the plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , svgr()],
  
})
