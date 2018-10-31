export type Environment = {
  Canvas: typeof HTMLCanvasElement
  Image: typeof HTMLImageElement
  Video: typeof HTMLVideoElement
  createCanvasElement: () => HTMLCanvasElement
  createImageElement: () => HTMLImageElement
  fetch: (url: string, init?: RequestInit) => Promise<Response>
  readFile: (filePath: string) => Promise<Buffer>
}