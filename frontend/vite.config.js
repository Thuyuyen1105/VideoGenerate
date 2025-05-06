import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Định nghĩa alias '@' trỏ tới thư mục 'src'
    },
  },

  server: {
    port: 3000, // Sử dụng port cố định 3000
    host: true, // Cho phép truy cập từ các thiết bị khác trong mạng
  },
});
