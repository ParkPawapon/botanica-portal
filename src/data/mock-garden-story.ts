import type { GardenStory, GardenTimelineEvent } from "@/entities/garden";

export const mockGardenStory: GardenStory = {
  id: "garden-story",
  title: "A Living Learning Space",
  summary: "Placeholder story data for the educational institution botanical garden landing page.",
  vision:
    "Connect students and visitors with conservation, biodiversity, and local plant knowledge.",
  images: [
    {
      src: "/images/botanical/placeholder-garden.png",
      alt: "Placeholder botanical garden image",
    },
  ],
};

export const mockGardenTimeline: GardenTimelineEvent[] = [
  {
    id: "timeline-origin",
    year: 2026,
    title: "Foundation Prepared",
    description: "Placeholder timeline event for future garden history content.",
  },
];
