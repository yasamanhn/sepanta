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
        main: "/src/pages/index.html",
        page1: "/src/pages/blog.html",
        page2: "/src/pages/contactWithUs.html",
        page3: "/src/pages/inside-decoration.html",
        page4: "/src/pages/javaaz.html",
        page5: "/src/pages/outside-decoration.html",
        page6: "/src/pages/projects.html",
        page7: "/src/pages/ShowAllServices.html",
        page8: "/src/pages/SingleBlog.html",
        page9: "/src/pages/SingleDesignProject.html",
        page10: "/src/pages/SingleServiceAnotherPage.html",
        page11: "/src/pages/SingleServiceDesign.html",
        page12: "/src/pages/SingleServiceNezaratr.html",
      },
    },
    assetsDir: "assets",
  },
});
