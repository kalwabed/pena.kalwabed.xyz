<script>
  import { fly } from 'svelte/transition';

  export let href;
  export let extClass = '';

  const mainClass =
    'p1 outline-none w-fit transition-none hover:(no-underline bg-gray-100 dark:bg-plumFour) focus:(ring ring-blue-800)';
  const composedClass = `${mainClass} ${extClass}`;
</script>

<a in:fly={{ x: -30 }} {href} class={composedClass}>
  <slot />
</a>
