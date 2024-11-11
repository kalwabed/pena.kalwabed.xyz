<script lang="ts">
  import logo from '$lib/assets/logo.avif';
  import oldLogo from '$lib/assets/old-logo.avif';

  interface Props {
    width?: number;
    height?: number;
  }

  let { width = 30, height = 30 }: Props = $props();
</script>

<img
  src={logo}
  alt="Logo"
  {width}
  {height}
  class="rounded-full shadow ring-2 hidden dark:block hover:animate-spin"
  decoding="async"
  loading="lazy"
/>
<img
  src={oldLogo}
  alt="Logo"
  {width}
  {height}
  class="rounded-full shadow ring-2 dark:hidden hover:animate-spin"
  decoding="async"
  loading="lazy"
/>
