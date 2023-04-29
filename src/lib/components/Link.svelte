<script>
  import { fly } from 'svelte/transition';

  export let href;
  export let extClass = '';
  export let withTransition = false;

  const mainClass =
    'outline-none underline-offset-3 inline-flex items-center text-lg w-fit underline dark:[text-decoration-color:#504f57] [text-decoration-color:#c4c4c4] transition-none hover:(no-underline bg-gray-200 dark:bg-plumNine) focus:(ring ring-blue-500 ring-offset-2) ';
  const composedClass = `${mainClass} ${extClass}`;
</script>

{#if withTransition}
  <a in:fly={{ x: -30 }} {href} class={composedClass}>
    <slot />
  </a>
{:else}
  <a {href} class={composedClass}>
    <slot />
  </a>
{/if}
