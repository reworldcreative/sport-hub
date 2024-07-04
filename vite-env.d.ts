/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="unplugin-fonts/client" />
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "react-audio-visualize" {
  import { FC } from "react";

  interface AudioVisualizerProps {
    blob?: Blob;
    ref?: React.RefObject<HTMLCanvasElement>;
    height?: number | null; 
    width?: number | null;
    barWidth?: number | null;
    gap?: number | null;
    backgroundColor?: string| null,
    barColor?: string| null,
    barPlayedColor?: string| null, 
    currentTime?: number = 0,
    duration?: number = 1,
    style?:React.CSSProperties| null;
  }

  interface LiveAudioVisualizerProps {
    mediaRecorder?;
    height?: number | null; 
    width?: number | null;
    barWidth?: number | null;
    gap?: number | null;
    backgroundColor?: string| null,
    barColor?: string| null,
    barPlayedColor?: string| null, 
    fftSize?: number| null,
    maxDecibels?: number| null,
    minDecibels?: number| null,
    smoothingTimeConstant?: number| null,
  }

  export const AudioVisualizer: FC<AudioVisualizerProps>;
  export const LiveAudioVisualizer: FC<LiveAudioVisualizerProps>;
  
}

declare module "vite-plugin-change-extension" { 
  import { Plugin } from 'vite';
  import { FilterPattern } from '@rollup/pluginutils';
  
  interface ChangeImageExtensionOptions {
    include?: FilterPattern;
    exclude?: FilterPattern;
  }
  
  export default function changeImageExtension(options?: ChangeImageExtensionOptions): Plugin;
}
