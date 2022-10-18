<script lang="ts">
  import type { PageData } from './$types';
  import Seo from '$lib/components/SEO.svelte';
  import Tag from '$lib/components/Tag.svelte';

  export let data: PageData;

  const { tags } = data;
</script>

<Seo title="Tags" />

<h1 class="text-4xl font-bold leading-relaxed">🪢 Tags</h1>
<p class="text-gray-500">Temukan tulisan-tulisan berdasarkan Tag di bawah.</p>

<ul class="flex gap-4 mt-6">
  {#each tags as tag}
    <li>
      <Tag {tag} />
    </li>
  {/each}
</ul>
