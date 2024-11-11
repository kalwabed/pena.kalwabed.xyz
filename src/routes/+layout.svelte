<script lang="ts">
  import 'uno.css';
  import '@unocss/reset/tailwind.css';

  import TopNavigation from '$lib/components/TopNavigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="w-full flex-auto flex flex-col font-sans min-h-full dark:bg-mauveOne dark:text-mauveTwelve">
  <TopNavigation />
  <main class="w-full max-w-full md:max-w-screen-lg mx-auto flex flex-col mt-10 md:mt-20 p-4 lg:p-0">
    {@render children?.()}
  </main>
  <Footer />
</div>

<style>
  :global(html, body, #svelte) {
    height: 100%;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: 'Crimson Pro', sans-serif;
  }
</style>
