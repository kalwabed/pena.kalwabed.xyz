<script lang="ts">
  import type { Post } from '$lib/utils/fetch-data';

  export let posts: Post[];
</script>

<section class="mt-4 grid grid-rows-1 gap-4">
  {#each posts as post}
    <a
      href={`/${post.slug}`}
      class="link outline-none text-lg w-fit underline transition-none hover:(no-underline bg-gray-200) focus:(ring ring-blue-500 ring-offset-2)"
    >
      {post.title}
    </a>
  {/each}
</section>

<style>
  .link {
    text-decoration-line: 1px;
    text-decoration-color: hsl(0, 0%, 77%);
    text-underline-offset: 3px;
  }
</style>
