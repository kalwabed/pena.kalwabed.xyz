<script lang="ts">
  interface Props {
    title?: string;
    children?: import('svelte').Snippet;
  }

  let { title = 'Callout', children }: Props = $props();
</script>

<aside class="w-full flex bg-gray-100 dark:(bg-plumTwo text-plumTwelve border-plumSix) gap-1 p-2 rounded border">
  <span
    ><svg class="w-6 h-6" fill="#fde047" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      /></svg
    ></span
  >
  <div class="flex flex-col w-full gap-1">
    <b>{title}</b>
    {@render children?.()}
  </div>
</aside>
