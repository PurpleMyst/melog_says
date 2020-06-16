import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "docs/index.js",
    format: "iife",
  },
  plugins: [
    resolve(),
    typescript(),
    terser(),
    copy({
      targets: [
        {
          src: ["src/index.html", "src/index.css", "src/melog.png"],
          dest: "docs",
        },
      ],
    }),
  ],
};
