# Website

Astro + Preact + Tailwind CSS v4 + daisyUI, prerendered to static HTML for GitHub Pages.

## Setup

Requires Node >= 22.12.

```sh
npm install
```

Copy your static assets (everything that used to live in `static/`, **except** `vim.js`,
which now lives in `src/scripts/`) into `public/`:

```sh
cp -r /path/to/old-project/static/* public/ && rm -f public/vim.js
```

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Dev server at http://localhost:4321      |
| `npm run build`   | Build the static site into `./dist/`     |
| `npm run preview` | Preview the production build locally     |

## Adding content

- **Blog posts:** put the PDF in `public/blog/`, then add a line to `src/data/blog.ts`
  (`{ title: "My post", href: "/blog/my-post.pdf", date: "Mar 2026" }`).
- **Expository notes / misc. material** (bottom of `/other`): same idea with `public/notes/`
  and `src/data/notes.ts`.
- **Work and Other pages:** edit the `ItemCard` lists in `src/views/Work.tsx` and
  `src/views/Other.tsx`.
- **Banners:** defined in `src/banners.ts`; pass `banner="..."` in the page file and
  `<Page banner="..." />` in the view.

## Deploying

Push to `main`; `.github/workflows/deploy.yml` builds and publishes to GitHub Pages
(Settings -> Pages -> Source: **GitHub Actions**).

## Notes

`tailwindcss`, `@tailwindcss/vite` and `daisyui` are pinned to exact versions on purpose.
`src/styles/styles.css` overrides `btn` with `@utility btn { @apply btn-primary }`, and
Tailwind >= 4.3 emits that rule *after* `btn-secondary` / `btn-warning` / `btn-success`,
which turns every button blue. Bump these three only after fixing that rule.
