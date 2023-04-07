import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar'
        ]
      }],
      eslintrc: {
        enabled: true, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true
      },
      dts: 'src/auto-import.d.ts' // 路径下自动生成文件夹存放全局指令
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    // 第一种方式
    alias: [{ find: /^@\//, replacement: path.join(__dirname, './src', '/') }]
    // 第二种方式
    // alias: {
    //   "@": path.join(__dirname, './src', '/'),
    // },
  }
})
