import type { Post } from '$lib/utils/fetch-data';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const getPosts = await fetch('/api/posts');
  const posts = (await getPosts.json()) as Post[];

  const postsTag = [];
  posts.forEach(post => {
    postsTag.push(...post.tags);
  });

  const removeDuplicateTags = (tags: string[]) => {
    const uniqueTags = new Set(tags);
    return [...uniqueTags];
  };

  return {
    posts,
    tags: removeDuplicateTags(postsTag)
  };
}) satisfies PageLoad;
