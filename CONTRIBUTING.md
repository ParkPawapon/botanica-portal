# Contributing

## Branch Naming

Branches must use `type/name`.

Allowed types:

- `feat`
- `fix`
- `chore`
- `ci`
- `docs`
- `refactor`
- `test`
- `security`
- `perf`
- `build`
- `release`

Examples:

- `feat/plant-registry-search`
- `ci/release-build-pipeline`
- `security/branch-protection`
- `test/release-automation`

## Commit Naming

Commits must use `type/name: clear description`.

Examples:

- `feat/plant-registry: add search filters`
- `ci/quality-gates: add production validation workflows`
- `security/repository-governance: require protected pull requests`

## Pull Request Rules

- Open a pull request for every change after the initial repository bootstrap.
- Keep each branch focused on one coherent body of work.
- Prefer multiple commits when a branch contains separable concerns.
- Do not merge until required checks pass.
- Do not bypass required reviews unless repository governance explicitly permits it.

## Local Validation

Run these commands before pushing:

```bash
bun run format:check
bun run lint
bun run type-check
bun run build
```
