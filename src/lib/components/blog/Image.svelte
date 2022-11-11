<script>
  export let src;
  export let caption;
  export let isFullWidth = false;
</script>

<figure class="text-center not-prose space-y-2 lg:w-[800px] lg:-mx-24">
  <img
    {src}
    alt="Ini gambar"
    class="rounded-lg mx-auto {isFullWidth ? 'w-full' : ''}"
    height="420"
    width="420"
    decoding="async"
    loading="lazy"
  />
  <figcaption class="text-xs inline-flex space-x-1">
    {@html caption}
  </figcaption>
</figure>
