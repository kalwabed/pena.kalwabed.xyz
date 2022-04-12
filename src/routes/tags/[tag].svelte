<script context="module" lang="ts">
  export async function load({ fetch, params }) {
    const getPosts = await fetch('/api/posts.json');
    const posts = await getPosts.json();

    return {
      props: {
        posts,
        tag: params.tag
      }
    };
  }
</script>

<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
  import type { ResourceMetadata } from '$lib/utils/fetch-data';

  export let posts: ResourceMetadata[];
  export let tag: string;
</script>

<h1 class="text-3xl font-bold">🧵{tag}</h1>

<PostList {posts} />
