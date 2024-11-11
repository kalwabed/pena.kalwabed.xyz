import type { PageLoad } from './$types';

import { deslugify } from '$lib/utils/slug';
import type { Post } from '$lib/utils/fetch-data';

export const load = (async ({ fetch, params }) => {
  const getPosts = await fetch('/api/posts');
  const posts = (await getPosts.json()) as Post[];
  const tag = params.tag as string;

  const postsByTag = posts.filter(post => post.tags.includes(deslugify(tag)));

  return {
    posts: postsByTag ?? [],
    tag: deslugify(tag),
  };
}) satisfies PageLoad;
