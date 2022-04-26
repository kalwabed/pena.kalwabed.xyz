<script context="module" lang="ts">
  export async function load({ fetch }) {
    const req = await fetch('/api/guests.json');
    const guestsBook = (await req.json()) as Guest[];

    return {
      props: { guestsBook }
    };
  }
</script>

<script lang="ts">
  import GuestBookForm from '$lib/components/GuestBookForm.svelte';
  import Seo from '$lib/components/SEO.svelte';
  import { guestsStore } from '$lib/store/guest';
  import { dateFormatter } from '$lib/utils/date';
  import type { Guest } from './api/guests.json';

  export let guestsBook: Guest[];

  guestsStore.set(guestsBook);

  let guests = [];

  guestsStore.subscribe(guestsBook => {
    guests = guestsBook.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  });
</script>

<Seo title="Buku Tamu" />

<h1 class="text-4xl font-bold leading-relaxed">👤 Buku Tamu</h1>
<p class="text-gray-500">
  Tinggalkan komentar di bawah. Bisa berupa apa saja -- apresiasi, informasi, harapan, atau bahkan lelucon.
</p>

<GuestBookForm />

<div class="grid grid-rows-1 gap-8">
  {#each guests as guest}
    <div class="flex flex-col">
      <p>{guest.body}</p>
      <div class="inline-flex space-x-2 text-gray-500">
        <p>{guest.name}</p>
        <span aria-readonly="true" class="text-gray-300">/</span>
        <p>
          {dateFormatter(guest.created_at, { dateStyle: 'medium', timeStyle: 'short' })}
        </p>
      </div>
    </div>
  {/each}
</div>
