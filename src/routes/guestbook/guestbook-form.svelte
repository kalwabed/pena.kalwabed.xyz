<script lang="ts">
  import 'notie/dist/notie.min.css';
  import { applyAction } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import type { ActionResult } from '@sveltejs/kit';
  import notie, { alert } from 'notie';

  async function handleOnSubmit() {
    const data = new FormData(this);

    alert({ type: 'info', text: 'Tunggu yaa', stay: true });

    const response = await fetch(this.action, {
      method: 'post',
      body: data
    });

    const resJson = await response.json();
    const result: ActionResult = resJson;

    notie.hideAlerts();

    if (result.type === 'success') {
      alert({ type: 'success', text: 'Komentar berhasil dikirim!' });
      // re-run all `load` functions, following the successful update
      await invalidateAll();
    } else if (result.type === 'invalid') {
      alert({ type: 'error', text: resJson?.data?.msg });
    }

    applyAction(result);
  }
</script>

<section class="w-full md:w-3/4 bg-blue-50 p-6 rounded border border-gray-300 my-8 shadow-sm">
  <h2 class="text-xl font-bold leading-relaxed">Tandai Kamu Disini</h2>
  <p class="text-gray-600">Bagikan sebuah pesan Anda kepada pengunjung yang lain.</p>

  <form method="post" on:submit|preventDefault={handleOnSubmit}>
    <div
      class="flex flex-col md:flex-row md:justify-between items-center w-full space-y-4 md:space-x-4 md:space-y-0 mt-4"
    >
      <div role="group" class="flex w-full flex-col space-y-2">
        <label for="name">Nama</label>
        <input
          type="text"
          id="name"
          name="name"
          class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base hover:border-gray-400 focus:(outline-none ring-2 ring-blue-600 border-transparent)"
        />
      </div>

      <div role="group" class="flex w-full flex-col space-y-2">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base hover:border-gray-400 focus:(outline-none ring-2 ring-blue-600 border-transparent)"
        />
      </div>
    </div>

    <div role="group" class="flex w-full flex-col space-y-2 mt-4">
      <label for="body">Pesan</label>
      <textarea
        id="body"
        name="body"
        class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base hover:border-gray-400 focus:(outline-none ring-2 ring-blue-600 border-transparent)"
      />
    </div>

    <div class="flex flex-col items-end md:(items-start flex-row justify-between) w-full mt-4 gap-4">
      <small class="text-sm text-gray-600">
        Informasi Anda hanya digunakan untuk menampilkan <br /> nama Anda dan membalas melalui email.
      </small>

      <button
        type="submit"
        class="inline-flex items-center h-10 px-6 font-semibold tracking-wide text-teal-900 transition rounded shadow md:w-auto !bg-teal-300 hover:(text-teal-800 !bg-teal-500) focus:(ring-2 ring-blue outline-none) disabled:(cursor-not-allowed !bg-gray-300 text-gray-500 hover:(!bg-gray-300 text-gray-500)"
      >
        Kirim
      </button>
    </div>
  </form>
</section>
