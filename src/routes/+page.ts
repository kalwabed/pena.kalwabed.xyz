import Post from '$lib/components/layouts/post.svelte';

export async function load({ fetch }) {
  const getPosts = await fetch('/api/posts');
  const posts = (await getPosts.json()) as Post[];

  return {
    posts
  };
}
