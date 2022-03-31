import {
  applyDirective,
  applyExtractor,
  Config,
  generate,
  PluginCreator,
} from "./deps.ts";

export type Option = Readonly<Config>;

const mapcss: PluginCreator<Option> = (option) => {
  return {
    postcssPlugin: "postcss-mapcss",
    Once: async (root) => {
      // TODO(miyauci): implement config file load
      // const path = await resolveConfigFilePath(fromFileSystem());
      // const config = path ? await resolveConfigFile(path) : option;

      await applyDirective(root, (input) => {
        const tokens = applyExtractor(input, option?.extractor);
        return generate(tokens, option ?? {});
      });
    },
  };
};

mapcss.postcss = true;

export default mapcss;
