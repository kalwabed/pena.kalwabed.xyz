import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite';
import { mdsvex } from 'mdsvex';

import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [mdsvex(mdsvexConfig), sveltePreprocess()],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    vite: {
      plugins: [Unocss()]
    }
  }
};

export default config;
