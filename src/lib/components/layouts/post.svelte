<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import Divider from '../Divider.svelte';
  import Seo from '../SEO.svelte';
  import Tag from '../Tag.svelte';
  import { dateFormatter } from '$lib/utils/date';
  import Link from '../Link.svelte';
  import ArrowLeft from '$lib/assets/arrow-left.svg';

  export let title = '';
  export let publishedAt = new Date();
  export let tags = [];
  export let updatedAt = new Date();
  export let desc = '';

  onMount(async () => {
    const slug = $page.url.pathname.replace('/', '');
    await fetch('/api/views.json', {
      body: JSON.stringify({
        slug
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
  });
</script>

<Seo {title} {desc} />

<article class="flex flex-col mx-auto">
  <h1 class="text-4xl font-bold text-center">{title}</h1>

  <header class="text-lg mt-2 mb-10 mx-auto flex flex-col gap-4">
    <div class="text-gray-500 text-center">
      <a href="https://www.instagram.com/kalwabed" title="Instagram account" target="_blank" rel="noopener noreferrer"
        >@kalwabed</a
      >
      <span class="text-gray-500">/</span>
      <time datetime={new Date(publishedAt).toDateString()}>{dateFormatter(publishedAt, { dateStyle: 'long' })}</time>
    </div>
    <div class="inline-flex items-center justify-center space-x-2">
      {#each tags as tag}
        <Tag {tag} />
      {/each}
    </div>
  </header>

  <main class="prose prose-custom text-left mx-auto">
    <slot />
  </main>

  <footer class="w-full flex flex-col my-14">
    <Divider />
    <p class="mt-8">
      Terakhir update: {dateFormatter(updatedAt, { dateStyle: 'long' })}
    </p>
  </footer>
</article>

<Link href="/#tulisan"><img src={ArrowLeft} alt="arrow left" decoding="async" loading="lazy" /> Tulisan lainnya</Link>
