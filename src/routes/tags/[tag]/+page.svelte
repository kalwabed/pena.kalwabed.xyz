<script lang="ts">
  import type { PageData } from './$types';
  import PostList from '$lib/components/PostList.svelte';
  import Seo from '$lib/components/SEO.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  const { tag, posts } = data;
</script>

<Seo title={tag} />

<h1 class="text-4xl font-bold leading-relaxed">🧵{tag}</h1>

<PostList {posts} />
