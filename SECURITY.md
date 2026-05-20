# Security Policy

## Supported Versions

The `main` branch is the only supported production line until the first public release.

## Reporting a Vulnerability

Report sensitive security issues through GitHub Security Advisories:

https://github.com/ParkPawapon/botanica-portal/security/advisories/new

Do not open public issues for vulnerabilities, secrets, authentication weaknesses, or private infrastructure details.

## Repository Security Rules

- All production changes must enter through a pull request.
- Direct pushes to protected branches are not allowed after branch protection is enabled.
- Required checks must pass before merge.
- Code owner review is required for protected branches.
- Branch and commit names must be meaningful and must not reference automated authorship.
- Secrets must never be committed. Use GitHub Actions secrets or environment-level secrets.
