<script lang="ts">
  import logo from '$lib/assets/logo.avif';
  import oldLogo from '$lib/assets/old-logo.avif';

  export let width: number = 30;
  export let height: number = 30;
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
