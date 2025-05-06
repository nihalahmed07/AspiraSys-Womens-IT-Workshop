declare module 'confetti-js' {
  interface ConfettiSettings {
    target: HTMLCanvasElement;
    max?: number;
    size?: number;
    animate?: boolean;
    respawn?: boolean;
    width?: number;
    height?: number;
    clock?: number;
    colors?: number[][];
    start_from_edge?: boolean;
    props?: string[];
    [key: string]: any;
  }

  export default class ConfettiGenerator {
    constructor(settings: ConfettiSettings);
    render(): void;
    clear(): void;
  }
}