import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        page1: "/blog.html",
        page2: "/contactWithUs.html",
        page3: "/inside-decoration.html",
        page4: "/javaaz.html",
        page5: "/outside-decoration.html",
        page6: "/projects.html",
        page7: "/ShowAllServices.html",
        page8: "/SingleBlog.html",
        page9: "/SingleDesignProject.html",
        page10: "/SingleServiceAnotherPage.html",
        page11: "/SingleServiceDesign.html",
        page12: "/SingleServiceNezaratr.html",
      },
    },
  },
});
