export const ROUTES = {
  home: "/",
  plants: "/plants",
  learningHub: "/learning-hub",
  plantDetail: (slug: string) => `/plants/${slug}`,
} as const;
