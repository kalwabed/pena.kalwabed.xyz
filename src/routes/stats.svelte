<script context="module" lang="ts">
  export async function load({ fetch }) {
    const getStats = await fetch('/api/views.json');
    const { stats } = await getStats.json();

    return {
      props: {
        stats
      }
    };
  }
</script>

<script lang="ts">
  import Seo from '$lib/components/SEO.svelte';
  import type { Views } from './api/views.json';

  export let stats: Views[] = [];
  console.log(stats);
</script>

<Seo title="Stats" />

<h1 class="text-4xl font-bold leading-loose">Pantau Lalu Lintas</h1>

<table class="table-auto max-w-3xl">
  <thead class="border-2">
    <tr class="text-left">
      <th>Slug</th>
      <th class="border-l-2">Visitor</th>
    </tr>
  </thead>
  <tbody>
    {#each stats as stat}
      <tr class="border">
        <td>{stat.slug}</td>
        <td class="border-l">{stat.count}</td>
      </tr>
    {/each}
  </tbody>
</table>

<em class="mb-12 mt-2 text-yellow-800">
  Terakhir update: {new Intl.DateTimeFormat('id', { dateStyle: 'medium', timeStyle: 'long' }).format(new Date())}
</em>

<style>
  th,
  td {
    padding: 0.5rem;
  }
</style>
