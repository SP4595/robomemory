# RoboMemory · CoRL 2026

Project website for **RoboMemory: A Brain-inspired Multi-memory Agentic Framework for Interactive Environmental Learning in Physical Embodied Systems**.

Built with Vue 3 and Vite. The website follows a simple, centered academic layout: paper title, full author list and affiliations, resource links, demonstration video, abstract, research figures, results, and BibTeX. Typography, whitespace, and pill-shaped resource links are inspired by [RoboBrain](https://superrobobrain.github.io/).

The 20 authors, their order, affiliation superscripts, equal-contribution markers, and corresponding-author envelopes follow the first page of the supplied CoRL 2026 manuscript. Desktop author rows also match the paper's four rows of five names; they wrap on smaller screens without reordering.

BibTeX uses the supplied OpenReview citation and the requested author field (the first ten authors followed by `and others`). The citation key remains `anonymous2026robomemory`. The displayed author list remains the full manuscript author list.

## Local development

```sh
npm ci
npm run dev
```

Open the printed local URL with the `/robomemory/` path.

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `docs/`, preserving the existing GitHub Pages deployment layout and `/robomemory/` base path. Commit the updated `docs/` together with source changes when publishing through the repository's Pages configuration.

## Content maintenance

- `src/data/paper.js`: authors, affiliations, benchmark data, and BibTeX.
- `src/App.vue`: page content and interactions.
- `src/style.css`: responsive layout and visual system.
- `src/assets/paper/`: figures extracted from the supplied CoRL 2026 manuscript, plus a poster extracted from the existing demonstration video.
- `public/paper/robomemory-corl2026.pdf`: supplied paper linked from the website.
- `public/social-preview.png`: sharing preview, with metadata in `index.html`.

Benchmark values follow Table 1 of the supplied manuscript. The real-world comparison follows Figure 5 and Section 3.5 (15 tasks). Improvements are expressed in **percentage points**. The real-world results describe repeated attempts in the evaluated kitchen setting. Code availability remains “coming soon” until a release URL is provided.

The 92 MB demonstration video uses `preload="none"` and a lightweight poster to avoid downloading the video before playback. Figures are lazy-loaded WebP assets. Fonts are local; the page needs no external font or chart services.
