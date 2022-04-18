<script context="module" lang="ts">
  export async function load({ fetch }) {
    const getPosts = await fetch('/api/posts.json');
    const posts = (await getPosts.json()) as ResourceMetadata[];

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
  import type { ResourceMetadata } from '$lib/utils/fetch-data';
  import { tagSlugify } from '$lib/utils/slug';

  export let tags;
</script>

<section class="flex gap-4">
  {#each tags as tag}
    <a href="/tags/{tagSlugify(tag)}" class="bg-gray-100 hover:bg-gray-200 transition">#{tagSlugify(tag)}</a>
  {/each}
</section>
