<script lang="ts">
  import { onMount, tick } from 'svelte';

  import { browser } from '$app/environment';
  import { theme } from '$lib/providers/store';

  let isDarkMode: boolean;
  $: isDarkMode = $theme === 'dark';

  onMount(() => {
    const isPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeInStorage = 'theme' in localStorage;
    if ((themeInStorage && JSON.parse(localStorage.theme) === 'dark') || (!themeInStorage && isPreferDark)) {
      theme.set('dark');
    }
  });

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

<button
  on:click={toggleDarkMode}
  class="p-2 font-medium border border-gray-100 dark:border-mauveSix rounded-sm text-sm inline-flex items-center content-center gap-2 outline-none hover:bg-gray-200 hover:dark:bg-mauveFour transition focus-visible:ring"
  title="Toggle theme"
>
  <div class="i-rdi:moon dark:i-rdi:sun" />
  <span class="dark:hidden block">Dark</span>
  <span class="hidden dark:block">Light</span>
</button>
