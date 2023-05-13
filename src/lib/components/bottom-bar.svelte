<script lang="ts">
  import { createPopper } from '@popperjs/core';
  import { onMount, tick } from 'svelte';

  import { browser } from '$app/environment';
  import { theme } from '$lib/providers/store';

  let btn;
  let tooltip;
  let show = false;

  let isDarkMode: boolean;
  $: isDarkMode = $theme === 'dark';

  onMount(() => {
    const isPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeInStorage = 'theme' in localStorage;
    if ((themeInStorage && JSON.parse(localStorage.theme) === 'dark') || (!themeInStorage && isPreferDark)) {
      theme.set('dark');
    }
  });

  const handleOpenMenu = () => {
    show = !show;
    if (show) {
      createPopper(btn, tooltip, {
        placement: 'top-end',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 15],
            },
          },
        ],
      });
    }
  };

  const toggleDarkMode = async (): Promise<void> => {
    theme.set(isDarkMode ? 'light' : 'dark');

    if (browser) {
      window.localStorage.setItem('theme', JSON.stringify($theme));

      // Not exactly sure why this is needed but without it, the first click fails.
      await tick();

      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  };
</script>

<div
  bind:this={tooltip}
  role="tooltip"
  class="bg-gray-50 dark:border-mauveSix dark:bg-mauveTwo border p-2 max-h-1/2 w-40 shadow rounded-lg {show
    ? ''
    : 'hidden'}"
>
  <div class="flex flex-col">
    <div class="flex flex-col" role="group">
      <span class="text-xs font-bold p-2">Theme</span>
      <button
        on:click={toggleDarkMode}
        class="p-2 w-full font-medium text-sm inline-flex items-center content-center gap-2 outline-none hover:bg-gray-200 hover:dark:bg-mauveFour transition focus-visible:ring"
      >
        <div class="i-rdi:moon dark:i-rdi:sun" />
        <span class="dark:hidden block">Dark</span>
        <span class="hidden dark:block">Light</span>
      </button>
    </div>
  </div>
</div>

<div
  class="sticky flex items-center justify-between transition shadow w-3/4 md:w-1/4 mx-auto bottom-[3%] rounded-xl border border-gray-100 dark:border-mauveSix p-2 bg-gray-50 bg-opacity-0.2 backdrop-blur h-full"
>
  <a
    href="/"
    class="outline-none p-2 hover:bg-gray-200 dark:hover:bg-mauveFour transition duration-400 rounded-xl focus-visible:ring-2"
    title="To home page"
  >
    <div class="i-rdi:home" />
  </a>
  <button
    bind:this={btn}
    class="outline-none p-2 hover:bg-gray-200 dark:hover:bg-mauveFour transition duration-400 rounded-xl focus:bg-gray-100 dark:focus:bg-mauveFive focus-visible:ring-2"
    on:click={handleOpenMenu}
  >
    <div class="i-rdi:gear" />
  </button>
</div>
