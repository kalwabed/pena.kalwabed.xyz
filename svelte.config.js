import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    mdsvex({
      extension: '.svx',
      layout: {
        _: '/src/lib/components/layouts/post.svelte'
      }
    }),
    sveltePreprocess()
  ],

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
