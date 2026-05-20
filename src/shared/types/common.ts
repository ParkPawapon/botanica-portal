import type { ReactNode } from "react";

export type Nullable<T> = T | null;

export type WithChildren<T = unknown> = T & {
  children: ReactNode;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
