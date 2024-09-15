import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/pages/index.html",
        page1: "/pages/blog.html",
        page2: "/pages/contactWithUs.html",
        page3: "/pages/inside-decoration.html",
        page4: "/pages/javaaz.html",
        page5: "/pages/outside-decoration.html",
        page6: "/pages/projects.html",
        page7: "/pages/ShowAllServices.html",
        page8: "/pages/SingleBlog.html",
        page9: "/pages/SingleDesignProject.html",
        page10: "/pages/SingleServiceAnotherPage.html",
        page11: "/pages/SingleServiceDesign.html",
        page12: "/pages/SingleServiceNezaratr.html",
      },
    },
  },
  root: "/src",
  outDir: "dist",
});
