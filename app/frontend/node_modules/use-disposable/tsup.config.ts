import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  sourcemap: "inline",
  dts: true,
  tsconfig: "tsconfig.lib.json",
  outDir: "lib",
});
