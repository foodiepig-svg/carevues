import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carevues.com.au',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
