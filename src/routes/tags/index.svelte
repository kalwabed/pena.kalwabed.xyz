<script lang="ts">
  const tags = ['opini', 'manusia'];
</script>

<section class="flex gap-4">
  {#each tags as tag}
    <a href="/tags/{tag}" class="bg-gray-100 hover:bg-gray-200 transition">#{tag}</a>
  {/each}
</section>
