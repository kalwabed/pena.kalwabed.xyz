<script lang="ts">
  import { page } from '$app/stores';

  import app from '$lib/configs/app';

  const { siteName, siteUrl, siteDescription, keywords } = app;
  const pathname = siteUrl.concat($page.url.pathname);

  export let title: string;
  export let desc: string = siteDescription;
</script>

<svelte:head>
  <title>{title} | {siteName}</title>
  <link rel="canonical" href={pathname} />
  <meta name="description" content={desc} />
  <meta name="keywords" content={keywords.join(',').toLowerCase()} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="blog" />
  <meta property="og:url" content={pathname} />
  <meta property="og:title" content={title || siteName} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/49640654?v=4" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={pathname} />
  <meta property="twitter:title" content={title || siteName} />
  <meta property="twitter:description" content={desc} />
  <meta property="twitter:image" content="https://avatars.githubusercontent.com/u/49640654?v=4" />
</svelte:head>
