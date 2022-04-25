<script context="module" lang="ts">
  export async function load({ fetch }) {
    const getPosts = await fetch('/api/posts.json');
    const posts = (await getPosts.json()) as Post[];

    const postsTag = [];
    posts.forEach(post => {
      postsTag.push(...post.tags);
    });

    const removeDuplicateTags = (tags: string[]) => {
      const uniqueTags = new Set(tags);
      return [...uniqueTags];
    };

    return {
      props: {
        posts,
        tags: removeDuplicateTags(postsTag)
      }
    };
  }
</script>

<script lang="ts">
  import Seo from '$lib/components/SEO.svelte';
  import type { Post } from '$lib/utils/fetch-data';
  import { tagSlugify } from '$lib/utils/slug';

  export let tags;
</script>

<Seo title="Tags" />

<h1 class="text-4xl font-bold leading-relaxed">🪢 Tags</h1>
<p class="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ad.</p>

<ul class="flex gap-4 mt-6">
  {#each tags as tag}
    <li>
      <a href="/tags/{tagSlugify(tag)}" class="bg-gray-100 hover:bg-gray-200 transition">#{tagSlugify(tag)}</a>
    </li>
  {/each}
</ul>
