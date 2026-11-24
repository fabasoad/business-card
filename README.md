# My personal website

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![Unit Tests](https://github.com/fabasoad/business-card/workflows/Unit%20Tests/badge.svg)
![security-dast](https://github.com/fabasoad/business-card/actions/workflows/security-dast.yml/badge.svg)
![security-sast](https://github.com/fabasoad/business-card/actions/workflows/security-sast.yml/badge.svg)
![linting](https://github.com/fabasoad/business-card/actions/workflows/linting.yml/badge.svg)
[![codecov](https://codecov.io/gh/fabasoad/business-card/branch/main/graph/badge.svg?token=AXVCJ8H06A)](https://codecov.io/gh/fabasoad/business-card)
![Website](https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Ffabasoad.github.io%2Fbusiness-card%2F)

Source code of my personal website, live at
[fabasoad.com](https://fabasoad.com) and mirrored on GitHub Pages at
[fabasoad.github.io/business-card](https://fabasoad.github.io/business-card/).
It is a single-page React + TypeScript application built with Vite, styled
with Bootstrap / SCSS, and localised into English, Japanese and Ukrainian.

## Prerequisites

- Node.js — the exact version is pinned in
  [.tool-versions](.tool-versions) (`nodejs 26.13.1`); use a version
  manager such as asdf or mise to install it.
- pnpm — the version is pinned by the `packageManager` field in
  [package.json](package.json) (`pnpm@12.21.0`); the easiest way to get
  it is Corepack, which ships with Node.js.
- GNU Make (optional) — the [Makefile](Makefile) wraps the most common
  pnpm commands; every `make` target below has the pnpm equivalent next
  to it.
- pre-commit (optional) — only needed if you want the Git hooks from
  [.pre-commit-config.yaml](.pre-commit-config.yaml) to run locally.

## Getting started

```sh
pnpm install   # or: make install
pnpm run start:dev   # or: make run
```

The second command starts the Vite dev server with hot reload. Other
commands:

| Task | pnpm | Make |
| --- | --- | --- |
| Install dependencies | `pnpm install` | `make install` |
| Start dev server | `pnpm run start:dev` | `make run` |
| Build for production | `pnpm run build:prod` | `make build` |
| Build in development mode | `pnpm run build:dev` | — |
| Run unit tests with coverage | `pnpm run test` | `make test` |
| Lint `src/` with Biome | `pnpm run lint` | `make lint` |
| Audit dependencies | `pnpm audit` | `make audit` |
| Remove `coverage/` and `temp/` | `pnpm run clean` | `make clean` |
| Update dependencies | `pnpm update` | `make update` |

A production build writes the static site to `dist/`. The release
workflow additionally creates a `.env` file with the
`REACT_APP_PUBLIC_POSTHOG_KEY` and `REACT_APP_PUBLIC_POSTHOG_HOST`
values (from GitHub secrets) before building, so a local `build:prod`
works without analytics configured.

## Project layout

- `src/` — the application itself: React components in
  `src/components/`, plain TypeScript logic (i18n, data storage,
  external API services) in `src/scripts/`, translations and images in
  `src/assets/`, and the Vitest suite in `src/__tests__/`.
- `index.html` and `404.html` — the two Vite entry points (see
  `rollupOptions.input` in [vite.config.ts](vite.config.ts)): the main
  page and the custom 404 page.
- `public/` — static files copied to `dist/` as-is.
- `server/` — see below.
- `scripts/` — see below.
- `.github/workflows/` — CI and release automation, see below.

## `server/` — local production server

A tiny Express server (`server/app.js`) for running the production
build locally, the way a static host would serve it. It serves a
directory of static files with rate limiting and falls back to
`index.html` for unknown paths (SPA routing). It has its own
`package.json` and lockfile because it only needs `express` and
`express-rate-limit`.

```sh
pnpm run build:prod   # build dist/ first
pnpm run start:web    # serves dist/ on http://localhost:8080
```

`start:web` runs the server under nodemon with
`PUBLIC_PATH=../dist`; without `PUBLIC_PATH` the server serves its own
`public/` directory instead.

## `scripts/` — helper scripts

`scripts/wait-deploy-completed.sh` is the only script. Given a
timestamp, it polls the Render API (using the `RENDER_SERVICE_ID` and
`RENDER_API_KEY` environment variables) until the first deployment
created after that timestamp finishes, and fails on timeout or a failed
deployment. The release workflow uses it to wait for the production
deployment before running security checks against the live site.

## Tests and CI

Unit tests use Vitest with jsdom and Testing Library; they live next to
the code they cover under `src/__tests__/`. Coverage thresholds are
configured in [vitest.config.ts](vitest.config.ts).

GitHub Actions workflows in `.github/workflows/`:

- `unit-tests.yml` — Vitest on pull requests and pushes to `main`.
- `linting.yml` — Biome lint for `src/` plus the pre-commit hooks.
- `security-sast.yml` / `security-dast.yml` — static and dynamic
  security scanning.
- `release.yml` — releases, see the next section.
- `sync-labels.yml`, `update-license.yml` — repository maintenance.

## Release and deployment

Merging to `main` does **not** deploy anything. A release starts by
pushing a version tag:

```sh
git tag vX.Y.Z
git push origin vX.Y.Z
```

The `release.yml` workflow then:

1. Installs dependencies and builds the site (`make install`,
   `make build`), with the PostHog `.env` described above.
2. Deploys `dist/` to GitHub Pages, which serves
   [fabasoad.github.io/business-card](https://fabasoad.github.io/business-card/).
3. Creates the GitHub release for the tag.
4. Waits for the deployment of [fabasoad.com](https://fabasoad.com) on
   Render to finish (`scripts/wait-deploy-completed.sh`) and dispatches
   `security-dast.yml` against the live site.

The infrastructure behind fabasoad.com (the Render service and
everything it needs) is **not** defined in this repository — it lives
in the separate
[business-card-deployment](https://github.com/fabasoad/business-card-deployment)
repository (Terraform). This repository only builds the site content;
that repository provisions where the content runs.

## Contributions

![Alt](https://repobeats.axiom.co/api/embed/8032b12e3f9ca2968403abd56e82475b3b57e5e3.svg "Repobeats analytics image")
