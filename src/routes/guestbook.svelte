<script lang="ts">
  import Seo from '$lib/components/SEO.svelte';
</script>

<Seo title="Buku Tamu" />

<h1 class="text-4xl font-bold leading-relaxed">👤 Buku Tamu</h1>
<p class="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ad.</p>

<section class="w-full md:w-3/4 p-6 rounded border border-gray-300 my-8">
  <h2 class="text-2xl font-bold leading-relaxed">Tandai Kamu Disini</h2>
  <p class="text-gray-500">Bagikan sebuah pesan Anda kepada pengunjung yang lain.</p>

  <div class="flex justify-between items-center w-full space-x-4 mt-4">
    <div role="group" class="flex w-full flex-col space-y-2">
      <label for="fullname">Nama</label>
      <input
        type="text"
        id="fullname"
        class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:(outline-none ring-2 ring-blue-600 border-transparent)"
      />
    </div>

    <div role="group" class="flex w-full flex-col space-y-2">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:(outline-none ring-2 ring-blue-600 border-transparent)"
      />
    </div>
  </div>

  <div role="group" class="flex w-full flex-col space-y-2 mt-4">
    <label for="message">Pesan</label>
    <textarea
      id="message"
      class="rounded-lg transition flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:(outline-none ring-2 ring-blue-600 border-transparent)"
    />
  </div>

  <div class="flex justify-between w-full mt-4">
    <small class="text-sm text-gray-500">
      Informasi Anda hanya digunakan untuk menampilkan <br /> nama Anda dan membalas melalui email.
    </small>

    <button
      class="inline-flex items-center w-full h-10 px-6 font-semibold tracking-wide text-teal-900 transition rounded shadow md:w-auto bg-teal-400 hover:(text-teal-800 bg-teal-500) focus:(ring-2 ring-blue outline-none)"
    >
      Kirim
    </button>
  </div>
</section>

<div class="grid grid-rows-1 gap-8">
  <div class="flex flex-col">
    <p>Selamat berbuka puasa</p>
    <div class="inline-flex space-x-4 text-gray-500">
      <p>John Doe</p>
      <span>/</span>
      <p>13 Apr 2022 at 10.00 AM</p>
    </div>
  </div>
</div>
