// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://spetrescu.ro",
    trailingSlash: "ignore",
    build: {
        format: "directory",
    },
});
