import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
    { ignores: ["dist/", ".astro/", "public/", ".context/", "node_modules/"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...astro.configs.recommended,
];
