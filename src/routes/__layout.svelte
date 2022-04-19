<script lang="ts">
  import 'uno.css';
  import '@unocss/reset/tailwind.css';

  import '@fontsource/open-sans/400.css';
  import '@fontsource/open-sans/600.css';
  import '@fontsource/montserrat/400.css';
  import '@fontsource/montserrat/600.css';

  import TopNavigation from '$lib/components/TopNavigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="w-full flex-auto flex flex-col h-full">
  <TopNavigation />
  <main class="w-full max-w-full md:max-w-screen-lg mx-auto flex flex-col mt-10 md:mt-20 p-4 md:p-0">
    <slot />
  </main>
  <Footer />
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
</style>
