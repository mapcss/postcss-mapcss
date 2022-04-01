import {
  applyDirective,
  applyExtractor,
  Config,
  fromFileSystem,
  generate,
  MapCSSOption,
  mergeConfig,
  PluginCreator,
  resolveConfigFile,
  resolveConfigFilePath,
} from "./deps.ts";

export type Option = Readonly<
  & Config
  & MapCSSOption
  & Partial<{
    /** Whether load MapCSS config file or not.
     * @default true
     */
    useConfig: boolean;
  }>
>;

const mapcss: PluginCreator<Option> = (option) => {
  return {
    postcssPlugin: "postcss-mapcss",
    Once: async (root) => {
      const { injectCSS, ...rest } = option ?? {};
      let _config: Config | undefined;

      if (option?.useConfig ?? true) {
        const path = await resolveConfigFilePath(fromFileSystem());
        if (path) {
          _config = await resolveConfigFile(path);
        }
      }
      const config = mergeConfig(_config ?? {}, rest ?? {});

      await applyDirective(root, (input) => {
        const tokens = applyExtractor(input, config?.extractor);
        return generate(tokens, config ?? {}, { injectCSS: injectCSS ?? true });
      });
    },
  };
};

mapcss.postcss = true;

export default mapcss;
