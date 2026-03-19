import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Replace with your GitHub Pages URL or custom domain
  site: 'https://chiragjog.github.io',
  // If deploying to https://chiragjog.github.io/blog, set base: '/blog'
  // If using a custom domain or root, remove base
  // base: '/blog',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
