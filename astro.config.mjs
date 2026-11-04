import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Set these for GitHub Pages if needed:
  //   User/org site or custom domain: only `site` (base stays "/").
  //   Project site (user.github.io/repo): also set base: '/repo' -- but note
  //   this codebase uses root-absolute URLs ("/art", "/logo.png", ...), which
  //   would then need the base prefixed.
  // site: 'https://<user>.github.io',
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
