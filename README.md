# Botanica Portal

Production-grade foundation for an educational institution botanical garden website. This phase contains the app shell, design tokens, routing skeletons, providers, SEO utilities, clean architecture boundaries, and contributor conventions for future page development.

## Tech Stack

- Next.js App Router with TypeScript and `src/`
- Bun for package management and command execution
- Tailwind CSS and CSS variables for utility styling
- Material UI with Emotion and `AppRouterCacheProvider`
- ESLint, Prettier, strict TypeScript, absolute imports via `@/*`

## Getting Started

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `bun run dev` starts local development.
- `bun run build` creates a production build.
- `bun run start` serves the production build.
- `bun run lint` runs ESLint.
- `bun run lint:fix` fixes supported lint issues.
- `bun run format` formats the repository with Prettier.
- `bun run type-check` runs TypeScript without emitting files.
- `bun run clean` removes generated build artifacts.

## Folder Structure

- `src/app` contains only routing, layouts, metadata, loading, error, sitemap, robots, and manifest files.
- `src/features` owns feature-specific UI and business-facing composition.
- `src/entities` owns domain models, schemas, and domain utilities.
- `src/shared` contains reusable UI primitives, layout, hooks, constants, types, and utilities.
- `src/config` contains site, navigation, SEO, and public environment configuration.
- `src/theme` contains palette, typography, radius, shadow, token, and MUI theme definitions.
- `src/styles` contains global design-token and animation CSS.
- `src/data` contains temporary mock data until the real data source is connected.

## Architecture Rules

- Keep route files thin; routes import feature modules instead of business logic.
- Shared modules must not depend on feature modules.
- Features may depend on `entities`, `shared`, `config`, `lib`, and `data`.
- Domain entities must not import React components.
- Prefer Server Components. Add `"use client"` only for providers, hooks, and interactive UI.
- Use named exports except where Next.js requires default exports.
- Use kebab-case file names, PascalCase React components, and camelCase variables.
- Keep approved design tokens centralized and avoid ad hoc colors.

## Design System

The palette is locked to the botanical teal, cream, gold, coral, sky blue, success, and error colors defined in `src/theme/theme-tokens.ts` and exposed through CSS variables in `src/styles/design-tokens.css`. Radius, shadow, typography, motion, focus, and skeleton styles are prepared for responsive, accessible future UI work.

## Current Routes

- `/` landing page placeholder
- `/plants` plant registry placeholder
- `/plants/[slug]` plant detail placeholder
- `/learning-hub` botanical learning and exploration hub placeholder

## Future Roadmap

- Implement the final landing page sections.
- Add plant registry search, filtering, sorting, pagination, and detail pages.
- Connect plant records to a CMS or database.
- Add QR-code support, structured data, and image optimization.
- Build the interactive learning hub with maps, missions, quiz flows, and student projects.

## Contributor Notes

Run `bun run lint`, `bun run type-check`, and `bun run build` before merging. Keep new modules inside their architecture boundary, document new environment variables in `.env.example`, and extend tokens before adding new visual primitives.
