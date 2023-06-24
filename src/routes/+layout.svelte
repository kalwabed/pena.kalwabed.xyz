<script lang="ts">
  import 'uno.css';
  import '@unocss/reset/tailwind.css';

  import { PUBLIC_UMAMI_WEBSITE_ID, PUBLIC_UMAMI_URL } from '$env/static/public';
  import TopNavigation from '$lib/components/TopNavigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
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

<div class="w-full flex-auto flex flex-col font-sans min-h-full dark:bg-mauveOne dark:text-mauveTwelve">
  <TopNavigation />
  <main class="w-full max-w-full md:max-w-screen-lg mx-auto flex flex-col mt-10 md:mt-20 p-4 md:p-0">
    <slot />
  </main>
  <Footer />
</div>

<style global>
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
</style>
