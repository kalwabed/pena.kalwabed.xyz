<script>
  export let src;
  export let caption;
  export let isFullWidth = false;
</script>

<figure class="text-center">
  <img
    {src}
    alt="Ini gambar"
    class="rounded-lg mx-auto {isFullWidth ? 'w-full' : ''}"
    height="420"
    width="420"
    decoding="async"
    loading="lazy"
  />
  <caption class="text-xs inline-flex space-x-1">
    {@html caption}
  </caption>
</figure>
