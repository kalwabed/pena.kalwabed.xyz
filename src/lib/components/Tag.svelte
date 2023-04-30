<script lang="ts">
  import { slugify } from '$lib/utils/slug';

  export let tag;
  export let className = '';
</script>

<a
  href="/tags/{slugify(tag)}"
  class={`hover:(text-gray-700 bg-gray-300) bg-gray-200 dark:(bg-mauveThree text-mauveTwelve) dark:hover:(bg-mauveFour text-mauveEleven) py-0.5 px-1 rounded transition ${className}`}
  >#{slugify(tag)}</a
>
