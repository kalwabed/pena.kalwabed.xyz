<script lang="ts">
  import 'uno.css';
  import '@unocss/reset/tailwind.css';
  import '@fontsource/open-sans/latin-400.css';
  import '@fontsource/open-sans/latin-600.css';
  import '@fontsource/montserrat/latin-400.css';
  import '@fontsource/montserrat/latin-600.css';

  import { onMount, tick } from 'svelte';
  import { createPopper } from '@popperjs/core';

  import { PUBLIC_UMAMI_WEBSITE_ID, PUBLIC_UMAMI_URL } from '$env/static/public';
  import TopNavigation from '$lib/components/TopNavigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { theme } from '$lib/providers/store';
  import { browser } from '$app/environment';

  let btn;
  let tooltip;
  let show = false;

  let isDarkMode: boolean;
  $: isDarkMode = $theme === 'dark';

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

  onMount(() => {
    const isPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeInStorage = 'theme' in localStorage;
    if ((themeInStorage && JSON.parse(localStorage.theme) === 'dark') || (!themeInStorage && isPreferDark)) {
      theme.set('dark');
    }
  });
</script>

<svelte:head>
  <script
    async
    defer
    data-do-not-track="true"
    data-website-id={PUBLIC_UMAMI_WEBSITE_ID}
    src={PUBLIC_UMAMI_URL}
  ></script>
</svelte:head>

<div class="w-full flex-auto flex flex-col min-h-full dark:bg-mauveOne dark:text-mauveTwelve">
  <TopNavigation />
  <main class="w-full max-w-full md:max-w-screen-lg mx-auto flex flex-col mt-10 md:mt-20 p-4 md:p-0">
    <slot />
  </main>
  <Footer />

  <div
    bind:this={tooltip}
    role="tooltip"
    class="bg-gray-50 dark:border-mauveThree dark:bg-mauveTwo border p-2 max-h-1/2 w-40 shadow rounded-lg {show
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
    class="sticky flex items-center justify-between shadow w-3/4 md:w-1/4 mx-auto bottom-4 rounded-xl border border-gray-100 dark:border-mauveSix p-2 bg-gray-50 bg-opacity-0.2 backdrop-blur"
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
</div>

<style global>
  html {
    font-family: 'Open Sans', sans-serif;
  }

  html,
  body,
  #svelte {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat, sans-serif;
  }

  .gradient {
    background: linear-gradient(to right, rgba(255, 191, 0, 0.3), rgba(255, 0, 128, 0.3), rgba(128, 0, 255, 0.3));
    background-size: 200% 200%;
    animation: gradientAnimation 10s ease infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
