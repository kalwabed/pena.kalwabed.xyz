<script lang="ts">
  import 'uno.css';
  import '@unocss/reset/tailwind.css';

  import '@fontsource/open-sans/latin-400.css';
  import '@fontsource/open-sans/latin-600.css';
  import '@fontsource/montserrat/latin-400.css';
  import '@fontsource/montserrat/latin-600.css';
  import { PUBLIC_UMAMI_WEBSITE_ID, PUBLIC_UMAMI_URL } from '$env/static/public';

  import TopNavigation from '$lib/components/TopNavigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import gearSvg from '$lib/assets/gear.svg';
  import homeSvg from '$lib/assets/home.svg';
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

<div class="w-full flex-auto flex flex-col h-full">
  <TopNavigation />
  <main class="w-full max-w-full md:max-w-screen-lg mx-auto flex flex-col mt-10 md:mt-20 p-4 md:p-0">
    <slot />
  </main>
  <Footer />

  <div
    class="sticky flex items-center justify-between shadow w-3/4 mx-auto bottom-4 rounded-xl border border-gray-100 p-2 bg-gray-50 bg-opacity-0.2 backdrop-blur"
  >
    <a href="/" class="outline-none p-2">
      <img src={homeSvg} alt="Home icon" loading="lazy" decoding="async" />
    </a>
    <!-- <span class="text-xs text-black">pena</span> -->
    <button class="outline-none p-2">
      <img src={gearSvg} alt="App icon" loading="lazy" decoding="async" />
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
