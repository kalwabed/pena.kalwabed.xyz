<script context="module" lang="ts">
  export async function load({ fetch }) {
    const getPosts = await fetch('/api/posts.json');
    const posts = await getPosts.json();

    return {
      props: {
        posts
      }
    };
  }
</script>

<script lang="ts">
  import Divider from '$lib/components/Divider.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import type { ResourceMetadata } from '$lib/utils/fetch-data';

  export let posts: ResourceMetadata[];
</script>

<img src="/logo.jpg" alt="Logo" width="50" height="50" class="rounded-full shadow" decoding="async" loading="lazy" />

<h1 class="mt-12 text-xl md:text-2xl mb-16">
  Haii! Saya Kalwabed, <br class="md:hidden" />seorang software engineer. <br />
  Sekarang lagi ngumpulin tulisan-tulisan saya yang berserakan ke sini.
</h1>

<Divider />

<h2 class="text-3xl font-bold mt-16">🌅 Tulisan</h2>

<PostList {posts} />
