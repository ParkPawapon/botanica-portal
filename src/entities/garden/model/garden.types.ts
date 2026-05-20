import type { ImageAsset } from "@/shared/types/common";

export type GardenStory = {
  id: string;
  title: string;
  summary: string;
  originYear?: number;
  vision: string;
  images: ImageAsset[];
};

export type GardenTimelineEvent = {
  id: string;
  year: number;
  title: string;
  description: string;
};
