<script lang="ts">
  import { guestsStore } from '$lib/store/guest';

  let name,
    email,
    body,
    isLoading = false;

  const handleOnSubmit = async () => {
    if (!name || !email || !body) {
      alert('Semua field harus diisi!');
      return;
    }

    // const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // if (!isEmailValid) {
    //   alert('Email tidak valid');
    //   return;
    // }

    isLoading = true;
    const req = await fetch('/api/guests.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        body
      })
    });

    const guest = await req.json();

    guestsStore.update(guestsBook => [...guestsBook, guest]);

    name = '';
    email = '';
    body = '';
    isLoading = false;
  };
</script>

<section class="w-full md:w-3/4 bg-blue-50 p-6 rounded border border-gray-300 my-8 shadow-sm">
  <h2 class="text-xl font-bold leading-relaxed">Tandai Kamu Disini</h2>
  <p class="text-gray-600">Bagikan sebuah pesan Anda kepada pengunjung yang lain.</p>

  <div class="flex justify-between items-center w-full space-x-4 mt-4">
    <div role="group" class="flex w-full flex-col space-y-2">
      <label for="fullname">Nama</label>
      <input
        bind:value={name}
        type="text"
        id="fullname"
        class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base hover:border-gray-400 focus:(outline-none ring-2 ring-blue-600 border-transparent)"
      />
    </div>

    <div role="group" class="flex w-full flex-col space-y-2">
      <label for="email">Email</label>
      <input
        bind:value={email}
        type="email"
        id="email"
        class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base hover:border-gray-400 focus:(outline-none ring-2 ring-blue-600 border-transparent)"
      />
    </div>
  </div>

  <div role="group" class="flex w-full flex-col space-y-2 mt-4">
    <label for="message">Pesan</label>
    <textarea
      bind:value={body}
      id="message"
      class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base hover:border-gray-400 focus:(outline-none ring-2 ring-blue-600 border-transparent)"
    />
  </div>

  <div class="flex flex-col items-end md:(items-start flex-row justify-between) w-full mt-4 gap-4">
    <small class="text-sm text-gray-600">
      Informasi Anda hanya digunakan untuk menampilkan <br /> nama Anda dan membalas melalui email.
    </small>

    <button
      on:click={handleOnSubmit}
      class="inline-flex items-center h-10 px-6 font-semibold tracking-wide text-teal-900 transition rounded shadow md:w-auto bg-teal-400 hover:(text-teal-800 bg-teal-500) focus:(ring-2 ring-blue outline-none) disabled:(cursor-not-allowed bg-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-500)"
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Kirim'}
    </button>
  </div>
</section>
