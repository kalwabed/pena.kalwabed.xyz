<script lang="ts">
  import type { Post } from '$lib/utils/fetch-data';
  import Link from './Link.svelte';

  export let posts: Post[] = [];
</script>

<section class="mt-6 grid grid-rows-1 gap-4">
  {#each posts as post}
    <Link withTransition href={`/${post.slug}`}>
      {post.title}
    </Link>
  {/each}
</section>
