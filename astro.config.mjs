import { defineConfig } from 'astro/config';

// Static output — builds to plain HTML/CSS/JS in dist/, hostable free on
// Cloudflare Pages or Netlify. No server required, scales via CDN.
export default defineConfig({
  output: 'static',
});
