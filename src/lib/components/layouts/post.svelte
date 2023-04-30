<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import Divider from '../Divider.svelte';
  import Seo from '../SEO.svelte';
  import Tag from '../Tag.svelte';
  import { dateFormatter } from '$lib/utils/date';
  import Link from '../Link.svelte';

  export let title = '';
  export let publishedAt = new Date();
  export let tags = [];
  export let updatedAt = new Date();
  export let desc = '';

  onMount(async () => {
    const slug = $page.url.pathname.replace('/', '');
    await fetch('/api/views/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slug,
      }),
    });
  });
</script>

<Seo {title} {desc} />

<article class="flex flex-col mx-auto">
  <h1 class="text-4xl font-bold text-center">{title}</h1>

  <header class="text-lg mt-2 mb-12 mx-auto flex flex-col gap-4">
    <div class="text-gray-500 text-center">
      <a href="https://www.instagram.com/kalwabed" title="Instagram account" target="_blank" rel="noopener noreferrer"
        >@kalwabed</a
      >
      <span class="text-gray-500">/</span>
      <time datetime={new Date(publishedAt).toDateString()}>{dateFormatter(publishedAt, { dateStyle: 'long' })}</time>
    </div>
  </header>

  <main class="prose prose-custom text-left mx-auto">
    <slot />
  </main>

  <footer class="w-full flex flex-col my-14">
    <Divider />
    <div class="inline-flex items-center space-x-2 my-4">
      {#each tags as tag}
        <Tag {tag} />
      {/each}
    </div>
    <p>
      Terakhir update: {dateFormatter(updatedAt, { dateStyle: 'long' })}
    </p>
  </footer>
</article>

<Link href="/#tulisan" extClass="gap-2">
  <div class="i-rdi:arrow-left" />
  <span>Tulisan lainnya</span>
</Link>
