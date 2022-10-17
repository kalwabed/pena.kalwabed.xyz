<script lang="ts">
  import Seo from '$lib/components/SEO.svelte';
  import { dateFormatter } from '$lib/utils/date';
  import type { PageServerData } from './$types';

  import GuestbookForm from './guestbook-form.svelte';

  export let data: PageServerData;

  $: guestBook = data?.guests?.map(guest => {
    return {
      ...guest,
      date: dateFormatter(guest.created_at, { dateStyle: 'medium', timeStyle: 'short' })
    };
  });
</script>

<Seo title="Buku Tamu" />

<h1 class="text-4xl font-bold leading-relaxed">👤 Buku Tamu</h1>
<p class="text-gray-500">
  Tinggalkan komentar di bawah. Bisa berupa apa saja -- apresiasi, informasi, harapan, atau bahkan lelucon.
</p>

<GuestbookForm />

<div class="grid grid-rows-1 gap-8">
  {#if guestBook.length === 0}
    <div class="w-full md:w-3/4 text-center bg-gray-50 rounded-lg shadow p-4">
      <p class="font-semibold">Memuat...</p>
    </div>
  {/if}

  {#each guestBook as guest}
    <div class="flex flex-col">
      <p>{guest.body}</p>
      <div class="inline-flex space-x-2 text-gray-500">
        <p>{guest.name}</p>
        <span aria-readonly="true" class="text-gray-300">/</span>
        <p>
          {guest.date}
        </p>
      </div>
    </div>
  {/each}
</div>
