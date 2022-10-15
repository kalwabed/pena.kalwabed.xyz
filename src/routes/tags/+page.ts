import Post from '$lib/components/layouts/post.svelte';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
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
}
