// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Target: Cloudflare Pages or Vercel (both work with default static output)
export default defineConfig({
  // Static Site Generation (SSG) — default in Astro
  output: 'static',

  // Set your production URL here for canonical links
  // Replace with your actual domain before deployment
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  // Image optimization
  image: {
    // For external images (Unsplash etc.), allow remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
});