import type { PageLoad } from './$types';

import Post from '$lib/components/layouts/post.svelte';

export const load: PageLoad = async ({ fetch }) => {
  const getPosts = await fetch('/api/posts');
  const posts = (await getPosts.json()) as Post[];

  return {
    posts
  };
};
