export {
  expect,
  objectContaining,
} from "https://deno.land/x/unitest@v1.0.0-beta.82/mod.ts";
export { default as postcss } from "https://deno.land/x/postcss_core@v1.0.0-beta.1/mod.js";
// deno-lint-ignore no-explicit-any
export type ParamReturn<T extends (...args: any[]) => unknown> = [
  ...Parameters<T>,
  ReturnType<T>,
];
