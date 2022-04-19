<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const getPosts = await fetch('/api/posts.json');
    const posts = (await getPosts.json()) as Post[];
    const tag = params.tag as string;

    const postsByTag = posts.filter(post => post.tags.includes(tagDeslugify(tag)));

    return {
      props: {
        posts: postsByTag ?? [],
        tag: tagDeslugify(tag)
      }
    };
  }
</script>

<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
  import type { Post } from '$lib/utils/fetch-data';
  import { tagDeslugify } from '$lib/utils/slug';

  export let posts: Post[];
  export let tag: string;
</script>

<h1 class="text-3xl font-bold">🧵{tag}</h1>

<PostList {posts} />
