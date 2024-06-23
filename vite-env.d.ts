/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="unplugin-fonts/client" />
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
