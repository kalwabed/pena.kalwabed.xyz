import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), Unocss()]
};

export default config;
