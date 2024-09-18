import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./pages/index.html"),
        page1: resolve(__dirname, "./pages/blog.html"),
        page2: resolve(__dirname, "./pages/contactWithUs.html"),
        page3: resolve(__dirname, "./pages/inside-decoration.html"),
        page4: resolve(__dirname, "./pages/javaaz.html"),
        page5: resolve(__dirname, "./pages/outside-decoration.html"),
        page6: resolve(__dirname, "./pages/projects.html"),
        page7: resolve(__dirname, "./pages/ShowAllServices.html"),
        page8: resolve(__dirname, "./pages/SingleBlog.html"),
        page9: resolve(__dirname, "./pages/SingleDesignProject.html"),
        page10: resolve(__dirname, "./pages/SingleServiceAnotherPage.html"),
        page11: resolve(__dirname, "./pages/SingleServiceDesign.html"),
        page12: resolve(__dirname, "./pages/SingleServiceNezaratr.html"),
      },
    },
  },
});
