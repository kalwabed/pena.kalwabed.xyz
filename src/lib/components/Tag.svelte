<script lang="ts">
  import { slugify } from '$lib/utils/slug';

  export let tag;
  export let className = '';
</script>

<a
  href="/tags/{slugify(tag)}"
  class={`hover:(text-gray-700 bg-gray-300) bg-gray-200 py-0.5 px-1 rounded transition ${className}`}>#{slugify(tag)}</a
>
