<script lang="ts">
  import type { PageData } from './$types';
  import Divider from '$lib/components/Divider.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import Seo from '$lib/components/SEO.svelte';
  import Logo from '$lib/components/Logo.svelte';

  export let data: PageData;
  const { posts } = data;
</script>

<Seo title="Home" />

<Logo width={50} height={50} />

<section class="mt-12 text-xl md:text-2xl">
  <h1 class="inline-flex font-semibold">Hai! Saya Kalwabed.</h1>
  <br />
  <span class="dark:text-mauveEleven text-gray-600"> Terkadang memang suka menulis hal-hal yang random. </span>
</section>

<a
  class="mt-8 mb-16 font-semibold text-blue-700 bg-gray-200 border hover:(border-gray-200 bg-gray-300) dark:(bg-plumFour text-plumEleven border-plumSeven) hover:dark:(bg-plumFive border-plumEight) focus:dark:bg-plumSeven py-1 px-2 rounded-sm w-fit transition"
  href="/guestbook">👤 Buku tamu</a
>

<Divider />

<h2 id="tulisan" class="text-3xl font-bold mt-16 leading-relaxed">🌅 Tulisan</h2>

<PostList {posts} />
