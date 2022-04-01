import { expect, objectContaining, postcss } from "./dev_deps.ts";
import mapcss from "./mod.ts";
import {
  bracketExtractor,
  simpleExtractor,
} from "https://deno.land/x/mapcss@v1.0.0-beta.56/core/mod.ts";
import { presetTw } from "https://deno.land/x/mapcss@v1.0.0-beta.56/preset_tw/mod.ts";

Deno.test("plugin", async () => {
  const code = "body{@apply antialiased text-gray-800}";

  await expect(
    postcss([mapcss({
      extractor: [simpleExtractor, bracketExtractor],
      preset: [presetTw()],
      useConfig: false,
    })]).process(code),
  ).resolves.toEqual(
    objectContaining({
      css:
        `body{-moz-osx-font-smoothing: grayscale;-webkit-font-smoothing: antialiased;color: rgb(31 41 55/1)}`,
    }),
  );
});
