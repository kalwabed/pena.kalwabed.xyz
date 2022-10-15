<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
  import Seo from '$lib/components/SEO.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Seo title={data.tag} />

<h1 class="text-4xl font-bold leading-relaxed">🧵{data.tag}</h1>

<PostList posts={data.posts} />
