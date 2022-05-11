<script>
  export let src;
  export let caption;
</script>

<figure>
  <img {src} alt="Omnahe uwong" class="rounded-lg" decoding="async" loading="lazy" />
  <caption class="text-xs inline-flex space-x-1">
    {@html caption}
  </caption>
</figure>
