<script>
  export let src;
  export let caption;
</script>

<figure class="text-center">
  <img {src} alt="Ini gambar" class="rounded-lg w-full" height="100" width="100" decoding="async" loading="lazy" />
  <caption class="text-xs inline-flex space-x-1">
    {@html caption}
  </caption>
</figure>
