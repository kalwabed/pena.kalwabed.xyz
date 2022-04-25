<script lang="ts">
  import { onMount } from 'svelte';

  import { page } from '$app/stores';
  import Divider from '../Divider.svelte';
  import { tagSlugify } from '$lib/utils/slug';
  import Seo from '../SEO.svelte';
  import Tag from '../Tag.svelte';

  export let title = '';
  export let publishedAt = new Date();
  export let tags = [];
  export let updatedAt = new Date();
  export let desc = '';
  let readCount = 0;

  const dateFormatter = date => {
    const currentDate = new Date(date);

    return `${currentDate.getDate()} ${currentDate.toLocaleString('default', {
      month: 'long'
    })} ${currentDate.getFullYear()}`;
  };

  onMount(async () => {
    const slug = $page.url.pathname.replace('/', '');
    const reqViews = await fetch('/api/views.json', {
      body: JSON.stringify({
        slug
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const resJson = await reqViews.json();
    readCount = resJson.count;
  });
</script>

<Seo {title} {desc} />

<article class="flex flex-col mx-auto">
  <h1 class="text-4xl font-bold text-center">{title}</h1>

  <header class="text-lg mt-2 mb-10 mx-auto flex flex-col gap-4">
    <div class="text-gray-500">
      <a href="https://instagram.com/kalwabed" title="Instagram account" target="_blank" rel="noopener noreferrer"
        >@kalwabed</a
      >
      <span class="text-gray-500">/</span>
      <time datetime={new Date(publishedAt).toDateString()}>{dateFormatter(publishedAt)}</time>
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
    <p class="mt-8">Terakhir update: {dateFormatter(updatedAt)}</p>
    <p>Sudah tayang: {readCount} kali</p>
  </footer>
</article>
