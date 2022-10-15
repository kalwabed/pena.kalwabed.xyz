import Post from '$lib/components/layouts/post.svelte';
import { deslugify } from '$lib/utils/slug';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const getPosts = await fetch('/api/posts');
  const posts = (await getPosts.json()) as Post[];
  const tag = params.tag as string;

  const postsByTag = posts.filter(post => post.tags.includes(deslugify(tag)));

  return {
    posts: postsByTag ?? [],
    tag: deslugify(tag)
  };
}
