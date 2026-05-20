import { ROUTES } from "@/shared/constants/routes";

export const navigationConfig = {
  mainNav: [
    {
      title: "Garden Story",
      href: ROUTES.home,
      description: "Institutional botanical garden origin and vision.",
    },
    {
      title: "Plant Registry",
      href: ROUTES.plants,
      description: "Searchable plant records and future detail pages.",
    },
    {
      title: "Learning Hub",
      href: ROUTES.learningHub,
      description: "Interactive botanical learning and exploration.",
    },
  ],
} as const;
