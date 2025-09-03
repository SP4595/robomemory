import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vitePrerender from "vite-plugin-prerender";
import viteCompression from "vite-plugin-compression";
import minipic from "vite-plugin-minipic";
// https://vite.dev/config/
export default defineConfig({
  base: "/RoboMemory/",
  plugins: [
    vue(),
    viteCompression({
      verbose: true, //是否在控制台输出压缩结果
      disable: false, //是否禁用,相当于开关在这里
      threshold: 10240, //体积大于 threshold 才会被压缩,单位 b，1b=8B, 1B=1024KB  那我们这里相当于 9kb多吧，就会压缩
      algorithm: "gzip", //压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: ".gz", //文件后缀
    }),
    vitePrerender({
      staticDir: path.join(__dirname, "docs"),
      routes: ["/"],
    }),

    minipic({
      sharpOptions: {
        png: {
          quality: 70,
        },
        jpeg: {
          quality: 70,
        },
        jpg: {
          quality: 70,
        },
        webp: {
          quality: 70,
        },
        avif: {
          quality: 70,
        },
        gif: {},
      },
      convert: [
        { from: "webp", to: "webp" },
        { from: "png", to: "png" },
        { from: "jpg", to: "webp" },
        { from: "jpeg", to: "webp" },
      ],
      cache: false,
      exclude: [],
      include: [],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 配置 @ 指向 src 目录
    },
    extensions: [".js", ".json", ".ts", ".vue"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  build: {
    outDir: "docs",
    minify: "terser", // 必须开启：使用terserOptions才有效果
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        //静态资源分类打包
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          //静态资源分拆打包
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
