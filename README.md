This repository contains a minimal multi-page personal website, inspired by `aandyw/aandyw.github.io` ([source repo](https://github.com/aandyw/aandyw.github.io)). It uses Next.js, TypeScript, and Tailwind CSS, and is configured to export a static site suitable for GitHub Pages.

Quick start:

```bash
pnpm install # or npm install / yarn
pnpm dev     # run locally on http://localhost:3000
pnpm build   # build and export to ./out
```

Deployment to GitHub Pages is handled by a GitHub Actions workflow that publishes the `out` directory to the `gh-pages` branch.
