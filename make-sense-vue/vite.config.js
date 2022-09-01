import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const resolvePath = (directPath) => {
  return path.resolve(__dirname, `./${directPath}`);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolvePath('src'),
      '@public': resolvePath('public')
    }
  }
})
