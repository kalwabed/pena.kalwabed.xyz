<script lang="ts">
  import { page } from '$app/state';

  import app from '$lib/configs/app';

  const { siteName, siteUrl, siteDescription, keywords } = app;
  const pathname = siteUrl.concat(page.url.pathname);

  interface Props {
    title: string;
    desc?: string;
  }

  let { title, desc = siteDescription }: Props = $props();

  // to overriding home page title, from Home to Pena Kalwabed
  const ogTitle = title === 'home' ? `${siteName} Kalwabed` : title;
  const combinedTitle = title === 'home' ? ogTitle : `${title} | ${siteName}`;

  const ogServiceUrl = 'https://www.kalwabed.xyz/api/og';
  const ogImage = `${ogServiceUrl}?domain=pena&title=${encodeURI(ogTitle)}&desc=${encodeURI(desc)}`;
</script>

<svelte:head>
  <title>{combinedTitle}</title>
  <link rel="canonical" href={pathname} />
  <meta name="description" content={desc} />
  <meta name="keywords" content={keywords.join(',').toLowerCase()} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="blog" />
  <meta property="og:url" content={pathname} />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={pathname} />
  <meta property="twitter:title" content={ogTitle} />
  <meta property="twitter:description" content={desc} />
  <meta property="twitter:image" content={ogImage} />
</svelte:head>
