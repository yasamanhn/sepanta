import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "/src/pages/index.html"),
        page1: path.resolve(__dirname, "/src/pages/blog.html"),
        page2: path.resolve(__dirname, "/src/pages/contactWithUs.html"),
        page3: path.resolve(__dirname, "/src/pages/inside-decoration.html"),
        page4: path.resolve(__dirname, "/src/pages/javaaz.html"),
        page5: path.resolve(__dirname, "/src/pages/outside-decoration.html"),
        page6: path.resolve(__dirname, "/src/pages/projects.html"),
        page7: path.resolve(__dirname, "/src/pages/ShowAllServices.html"),
        page8: path.resolve(__dirname, "/src/pages/SingleBlog.html"),
        page9: path.resolve(__dirname, "/src/pages/SingleDesignProject.html"),
        page10: path.resolve(
          __dirname,
          "/src/pages/SingleServiceAnotherPage.html"
        ),
        page11: path.resolve(__dirname, "/src/pages/SingleServiceDesign.html"),
        page12: path.resolve(
          __dirname,
          "/src/pages/SingleServiceNezaratr.html"
        ),
      },
    },
    assetsDir: "assets",
  },
});
