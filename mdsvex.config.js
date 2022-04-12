import { defineMDSveXConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolink from 'rehype-autolink-headings';

export default defineMDSveXConfig({
  extensions: ['.svx'],
  layout: {
    _: '/src/lib/components/layouts/post.svelte'
  },
  smartypants: {
    dashes: 'oldschool'
  },
  rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: 'wrap' }]]
});
