<script lang="ts">
  import Divider from '$lib/components/Divider.svelte';

  const exampleData = [
    {
      slug: 'basic',
      title: 'Kadang Bingung Sama Manusia 1',
      description: 'This is an Kadang Bingung Sama Manusia of a divider.',
    },
    {
      slug: 'basics',
      title: 'Kadang Bingung Sama Manusia 2',
      description: 'This is an Kadang Bingung Sama Manusia of a divider with a custom color.',
    },
    {
      slug: 'basicd',
      title: 'Kadang Bingung Sama Manusia 3',
      description: 'This is an Kadang Bingung Sama Manusia of a divider with a custom height.',
    },
  ];
</script>

<img src="/logo.jpg" alt="Logo" width="50" height="50" class="rounded-full shadow" decoding="async" loading="lazy" />

<h1 class="mt-12 text-2xl mb-16">
  Haii! Saya Kalwabed, seorang software engineer. <br />
  Sekarang lagi ngumpulin tulisan-tulisan saya yang berserakan ke sini.
</h1>

<Divider />

<h2 class="text-3xl font-bold mt-16">🌅 Tulisan</h2>

<section class="mt-4 grid grid-rows-1 gap-4">
  {#each exampleData as data}
    <a
      href={`/${data.slug}`}
      class="link outline-none text-lg underline w-fit transition hover:(no-underline bg-gray-200) focus:(ring ring-blue-500 ring-offset-2)"
    >
      {data.title}
    </a>
  {/each}
</section>

<style>
  .link {
    text-decoration-line: 1px;
    text-decoration-color: hsl(0, 0%, 77%);
    text-underline-offset: 3px;
  }
</style>
