import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./src/pages/index.html"),
        page1: resolve(__dirname, "./src/pages/blog.html"),
        page2: resolve(__dirname, "./src/pages/contactWithUs.html"),
        page3: resolve(__dirname, "./src/pages/inside-decoration.html"),
        page4: resolve(__dirname, "./src/pages/javaaz.html"),
        page5: resolve(__dirname, "./src/pages/outside-decoration.html"),
        page6: resolve(__dirname, "./src/pages/projects.html"),
        page7: resolve(__dirname, "./src/pages/ShowAllServices.html"),
        page8: resolve(__dirname, "./src/pages/SingleBlog.html"),
        page9: resolve(__dirname, "./src/pages/SingleDesignProject.html"),
        page10: resolve(__dirname, "./src/pages/SingleServiceAnotherPage.html"),
        page11: resolve(__dirname, "./src/pages/SingleServiceDesign.html"),
        page12: resolve(__dirname, "./src/pages/SingleServiceNezaratr.html"),
      },
    },
  },
});
