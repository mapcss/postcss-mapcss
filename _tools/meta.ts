import { BuildOptions } from "https://deno.land/x/dnt@0.22.0/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {
    deno: true,
  },
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "postcss-mapcss",
    version,
    description: "PostCSS plugin to use MapCSS",
    keywords: [
      "postcss",
      "postcss-plugin",
      "mapcss",
    ],
    license: "MIT",
    homepage: "https://github.com/mapcss/postcss-mapcss",
    repository: {
      type: "git",
      url: "git+https://github.com/mapcss/postcss-mapcss.git",
    },
    bugs: {
      url: "https://github.com/mapcss/postcss-mapcss/issues",
    },
    sideEffects: false,
    type: "module",
  },
  packageManager: "pnpm",
});

export function cleanVersion(version: string): string {
  return version.replace(/^v(.+)$/, "$1");
}
