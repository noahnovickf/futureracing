import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next", "next/typescript"),
  {
    rules: {
      "prettier/prettier": "off", // Disables Prettier inside ESLint to avoid conflicts
      indent: "off", // Prevents ESLint from interfering with indentation
      quotes: "off",
      semi: "off",
    },
  },
];

export default eslintConfig;
