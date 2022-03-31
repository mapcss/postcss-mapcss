# postcss-mapcss

[PostCSS] plugin [MapCSS]

[PostCSS]: https://github.com/postcss/postcss
[MapCSS]: https://mapcss.miyauchi.dev

input:

```css
body {
  @apply antialiased text-gray-700
}
```

output:

```css
body{
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: rgb(31 41 55/1)
}
```

## Usage

```ts
import postcss from "https://deno.land/x/postcss_core@$VERSION/mod.js";
import mapcss from "https://deno.land/x/postcss_mapcss@VERSION/mod.ts";
import {
  bracketExtractor,
  Config,
  simpleExtractor,
} from "https://deno.land/x/mapcss@$VERSION/core/mod.ts";
import { presetTw } from "https://deno.land/x/mapcss@$VERSION/preset_tw/mod.ts";

const config: Config = {
  extractor: [simpleExtractor, bracketExtractor],
  preset: [presetTw()],
};

const css = `body {
  @apply antialiased text-gray-700
}
`;

const result = await postcss([mapcss(config)]).process(css);
```
