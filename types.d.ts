declare module "*.ttf";

declare module "@env" {
  export const API_BASE: string;
}

declare module "*.png" {
  const value: any;
  export = value;
}
