<script lang="ts">
  import { page, navigating } from '$app/stores';
  import { fly } from 'svelte/transition';

  let breadcrumbs = [];

  const breadcrumbParser = () => {
    const pathnames = $page.url.pathname.replace(/\/$/, '').split('/');

    const breadcrumb = pathnames.map((pathname, index) => {
      const url = pathnames.slice(0, index + 1).join('/');
      const label = pathname.replace(/-/g, ' ');

      return {
        url: url || '/',
        label: label || 'Pena Kalwabed'
      };
    });

    breadcrumbs = breadcrumb;
    return breadcrumb;
  };

  $: if (!$navigating) breadcrumbParser();
</script>

<nav class="max-w-screen-xl mx-auto w-full p-4 flex items-center gap-3">
  <img src="/logo.jpg" alt="Logo" width="30" height="30" decoding="async" loading="lazy" class="rounded-full shadow" />
  <div class="link inline-flex items-center gap-1">
    {#each breadcrumbs as breadcrumb}
      <a
        transition:fly={{ x: -10 }}
        href={breadcrumb.url}
        class="outline-none hover:bg-gray-200 focus:(ring ring-offset-2 ring-blue-500) transition p-0.5"
      >
        {breadcrumb.label}
      </a>
      {#if breadcrumb.url !== $page.url.pathname}
        <span transition:fly={{ x: -10 }} class="text-gray-500">/</span>
      {/if}
    {/each}
  </div>
</nav>
