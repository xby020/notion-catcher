import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { crx3 } from 'vite-plugin-vue-crx3';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [vue(), crx3(), WindiCSS()], // crx3即为插件入口函数
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      input: resolve(__dirname, 'src/manifest.json') // 将源码中的manifest.json作为入口文件
    }
  }
});
