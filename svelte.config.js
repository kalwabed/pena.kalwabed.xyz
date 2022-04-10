import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import Unocss from 'unocss/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    vite: {
      plugins: [Unocss()]
    }
  }
}

export default config
