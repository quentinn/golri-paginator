/* eslint-disable import/no-anonymous-default-export */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

const PACKAGE_NAME = "index";
const ENTRY_FILE = "./src/index.ts";
const OUTPUT_DIR = "./dist";

export default [
  {
    input: ENTRY_FILE,
    output: [
      {
        file: `${OUTPUT_DIR}/${PACKAGE_NAME}.js`,
        format: "cjs",
        exports: "named",
        name: PACKAGE_NAME,
      },
      {
        file: `${OUTPUT_DIR}/${PACKAGE_NAME}.esm.js`,
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
      typescript(),
      babel({
        inputSourceMap: true,
        babelHelpers: "bundled",
        presets: ["@babel/preset-env", "@babel/preset-react"],
      }),
    ],
  },
];
