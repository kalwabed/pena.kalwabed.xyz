<script>
  import { fly } from 'svelte/transition';

  export let href;
  export let extClass = '';
  export let withTransition = false;

  const mainClass =
    'link outline-none inline-flex items-center text-lg w-fit underline transition-none hover:(no-underline bg-gray-200) focus:(ring ring-blue-500 ring-offset-2)';
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

<style>
  .link {
    text-decoration-line: 1px;
    text-decoration-color: hsl(0, 0%, 77%);
    text-underline-offset: 3px;
  }
</style>
