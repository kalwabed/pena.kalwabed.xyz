<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let isOpen = $state(false);
  interface Props {
    title?: string;
    children?: import('svelte').Snippet;
  }

  let { title = 'Toggle List', children }: Props = $props();

  const handleOnClick = () => {
    isOpen = !isOpen;
  };
</script>

<div class="my-2 p-2 bg-gray-100 dark:(bg-plumTwo text-plumTwelve border-plumSeven) rounded border">
  <button class="w-full flex items-center outline-none rounded-t transition gap-2" onclick={handleOnClick}>
    <span
      ><svg class="w-6 h-6" fill="#93c5fd" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        /></svg
      ></span
    >
    <span class="flex-1 text-left">{title}</span>
    {#if isOpen}
      <svg
        in:fly={{ x: 0, y: -15 }}
        out:fly={{ x: 0, y: -15 }}
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg
      >
    {:else}
      <svg
        in:fly={{ x: 0, y: 15 }}
        out:fly={{ x: 0, y: 15 }}
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg
      >
    {/if}
  </button>

  {#if isOpen}
    <p transition:fly={{ y: -10, easing: quintOut }}>
      {@render children?.()}
    </p>
  {/if}
</div>
