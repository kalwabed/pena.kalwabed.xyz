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
  export let location = 'Yogyakarta';
  export let darkCover = '';
  export let lightCover = '';

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

<article class="flex flex-col mx-auto -mt-16">
  <header class="h-auto flex items-center aspect-[1.6] relative">
    <div class="w-[70%]">
      <div class="text-sm text-gray-500 dark:text-mauveEleven">
        <span>{location},</span>
        <time datetime={new Date(publishedAt).toDateString()}>{dateFormatter(publishedAt, { dateStyle: 'long' })}</time>
      </div>
      <h1 class="text-4xl font-bold leading-relaxed">{title}</h1>
    </div>
    {#if lightCover}
      <img src={lightCover} alt={`${title} cover image`} class="block dark:hidden -right-4 md:-right-12 top-20 absolute w-[40%]" width="300" height="400" />
      <img src={darkCover} alt={`${title} cover image`} class="hidden dark:block -right-4 md:-right-12 top-20 absolute w-[40%]" width="300" height="400" />
    {/if}
  </header>

  <main class="prose prose-custom dark:prose-invert text-left mx-auto">
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
