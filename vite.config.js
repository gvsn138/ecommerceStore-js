import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});