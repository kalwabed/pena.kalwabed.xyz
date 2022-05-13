<script context="module" lang="ts">
  export async function load({ fetch }) {
    const getPosts = await fetch('/api/posts.json');
    const posts = (await getPosts.json()) as Post[];

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
  import Seo from '$lib/components/SEO.svelte';
  import type { Post } from '$lib/utils/fetch-data';
  import logo from '../lib/assets/logo.jpg';

  export let posts: Post[];
</script>

<Seo title="Home" />

<img src={logo} alt="Logo" width="50" height="50" class="rounded-full shadow" decoding="async" loading="lazy" />

<section class="mt-12 text-xl md:text-2xl">
  <h1 class="inline-flex font-semibold">Hai! Saya Kalwabed <span>.</span></h1>
  <br />
  Terkadang memang suka menulis hal-hal yang random.
</section>

<a class="mt-8 mb-16 font-semibold text-blue-500 bg-gray-200 p-1 rounded-sm w-fit" href="/guestbook">👤 Buku tamu</a>

<Divider />

<h2 id="tulisan" class="text-3xl font-bold mt-16 leading-relaxed">🌅 Tulisan</h2>

<PostList {posts} />
