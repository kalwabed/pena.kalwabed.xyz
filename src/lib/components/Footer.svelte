<script>
  import ThemeButton from './theme.svelte';
</script>

<footer class="px-4 py-8 md:(px-8 pt-24) w-full mt-auto">
  <div
    class="w-full flex flex-col md:flex-row gap-y-6 items-center lg:w-1/2 justify-between mx-auto text-gray-600 dark:text-mauveEleven"
  >
    <div class="flex items-center gap-8">
      <a class="hover:text-blue-500 dark:hover:text-plumEleven" href="/">/home</a>
      <a class="hover:text-blue-500 dark:hover:text-plumEleven" href="/guestbook">/guestbook</a>
      <div class="inline-flex items-center gap-1">
        <a
          href="https://www.kalwabed.com"
          class="hover:text-blue-500 dark:hover:text-plumEleven inline-flex items-center gap-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span> kalwabed.com </span>
          <div class="i-rdi:external-link text-xs" />
        </a>
      </div>
    </div>
    <ThemeButton />
  </div>
</footer>
