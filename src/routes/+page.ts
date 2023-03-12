import type { PageLoad } from './$types';
import type { Post } from '$lib/utils/fetch-data';

export const load = (async ({ fetch }) => {
  const getPosts = await fetch('/api/posts');
  const posts = (await getPosts.json()) as Post[];

  return {
    posts
  };
}) satisfies PageLoad;
