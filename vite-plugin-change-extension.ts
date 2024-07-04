import { Plugin } from "vite";
import { createFilter, FilterPattern } from "@rollup/pluginutils";

interface ChangeImageExtensionOptions {
  include?: FilterPattern;
  exclude?: FilterPattern;
}

export default function changeImageExtension(options: ChangeImageExtensionOptions = {}): Plugin {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: "change-image-extension",
    transform(code: string, id: string) {
      if (!filter(id)) return null;

      return {
        code: code.replace(/\.jpg/g, ".webp"),
        map: null,
      };
    },
  };
}
