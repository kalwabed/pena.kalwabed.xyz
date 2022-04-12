<script lang="ts">
  export let title = '';
  export let publishedAt = new Date();
  export let tags = [];

  const tagSlugify = tag => {
    return tag.toLowerCase().replace(/\s+/g, '-');
  };

  const publishedFormat = () => {
    const date = new Date(publishedAt);

    return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  };
</script>

<article class="flex flex-col mx-auto">
  <h1 class="text-4xl font-bold text-center">{title}</h1>

  <div class="text-lg mt-2 mb-10 mx-auto flex flex-col gap-4">
    <div class="text-gray-500">
      <a href="https://instagram.com/kalwabed" target="_blank" rel="noopener noreferrer">@kalwabed</a>
      <span class="text-gray-500">/</span>
      <time datetime={new Date(publishedAt).toDateString()}>{publishedFormat()}</time>
    </div>
    <div class="inline-flex items-center space-x-2">
      {#each tags as tag}
        <a
          href="/tags/{tagSlugify(tag)}"
          class="hover:(text-gray-700 bg-gray-300) bg-gray-200 py-0.5 px-1 rounded transition">#{tagSlugify(tag)}</a
        >
      {/each}
    </div>
  </div>

  <section class="prose prose-custom text-left mx-auto">
    <slot />
  </section>
</article>
