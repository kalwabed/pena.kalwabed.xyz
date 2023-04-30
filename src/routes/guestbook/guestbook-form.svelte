<script lang="ts">
  import 'notie/dist/notie.min.css';

  import { applyAction, deserialize } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import type { ActionResult } from '@sveltejs/kit';
  import notie, { alert } from 'notie';

  let isLoading = false;

  async function handleOnSubmit() {
    const data = new FormData(this);

    isLoading = true;
    alert({ type: 'info', text: 'Tunggu yaa', stay: true });

    const response = await fetch(this.action, {
      method: 'post',
      body: data,
    });

    const result: ActionResult = deserialize(await response.text());

    notie.hideAlerts();

    if (result.type === 'success') {
      alert({ type: 'success', text: 'Komentar berhasil dikirim!' });
      // re-run all `load` functions, following the successful update
      await invalidateAll();
    } else if (result.type === 'failure') {
      alert({ type: 'error', text: result?.data?.msg });
    }

    isLoading = false;
    applyAction(result);
  }

  const inputClass =
    'rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base hover:border-gray-400 outline-none focus:(ring-2 ring-blue-600) dark:(bg-mauveFour text-mauveEleven border-mauveSeven) hover:dark:(border-mauveEight)';
</script>

<section
  class="w-full md:w-3/4 bg-blue-50 dark:bg-mauveTwo p-6 rounded border border-gray-300 dark:border-mauveSix my-8 shadow-sm"
>
  <h2 class="text-xl font-bold leading-relaxed">Tandai Kamu Disini</h2>
  <p class="text-gray-600 dark:text-mauveEleven">Bagikan sebuah pesan Anda kepada pengunjung yang lain.</p>

  <form method="post" on:submit|preventDefault={handleOnSubmit}>
    <div
      class="flex flex-col md:flex-row md:justify-between items-center w-full space-y-4 md:space-x-4 md:space-y-0 mt-4"
    >
      <div role="group" class="flex w-full flex-col space-y-2">
        <label for="name">Nama</label>
        <input type="text" id="name" name="name" class={inputClass} />
      </div>

      <div role="group" class="flex w-full flex-col space-y-2">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" class={inputClass} />
      </div>
    </div>

    <div role="group" class="flex w-full flex-col space-y-2 mt-4">
      <label for="body">Pesan</label>
      <textarea id="body" name="body" class={inputClass} />
    </div>

    <div class="flex flex-col items-end md:(items-start flex-row justify-between) w-full mt-4 gap-4">
      <small class="text-sm text-gray-600 dark:text-mauveEleven">
        Informasi Anda hanya digunakan untuk menampilkan <br /> nama Anda dan membalas melalui email.
      </small>

      <button
        type="submit"
        disabled={isLoading}
        class="inline-flex items-center h-10 px-6 font-semibold tracking-wide text-teal-800 !bg-teal-300 hover:!bg-teal-400 dark:(text-plumEleven !bg-plumFour) transition rounded shadow md:w-auto dark:hover:!bg-plumFive outline-none focus:(ring-2 ring-blue) disabled:(cursor-wait opacity-50)"
      >
        Kirim
      </button>
    </div>
  </form>
</section>
