# postcss-mapcss

[PostCSS] plugin to use [MapCSS]

[PostCSS]: https://github.com/postcss/postcss
[MapCSS]: https://mapcss.miyauchi.dev

input:

```css
body {
  @apply antialiased text-gray-800
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

Create a `mapcss.config.ts` file in the project root.

```ts
// mapcss.config.ts
import {
  bracketExtractor,
  Config,
  simpleExtractor,
} from "https://deno.land/x/mapcss@$VERSION/core/mod.ts";
import { presetTw } from "https://deno.land/x/mapcss@$VERSION/preset_tw/mod.ts";

export default <Config> {
  preset: [presetTw()],
  extractor: [simpleExtractor, bracketExtractor],
};
```

See more
[Config](https://github.com/TomokiMiyauci/mapcss/blob/beta/core/types.ts#L219).

```ts
import postcss from "https://deno.land/x/postcss_core@$VERSION/mod.js";
import mapcss from "https://deno.land/x/postcss_mapcss@VERSION/mod.ts";

const css = `body {
  @apply antialiased text-gray-800
}
`;

const result = await postcss([mapcss]).process(css);
```

## Option

### useConfig

Whether load MapCSS config file or not.

@default `true`

### others

MapCSS Config

You can also pass `Config` directly.

If `useConfig` is `true` and `mapcss.config.ts` exists, it will be merged in
favor of the `Config` passed as argument.

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
  @apply antialiased text-gray-800
}
`;

const result = await postcss([mapcss(config)]).process(css);
```
