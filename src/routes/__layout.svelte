<script lang="ts">
  import 'uno.css'
  import '@unocss/reset/tailwind.css'

  import '@fontsource/yrsa/400.css'
  import '@fontsource/yrsa/500.css'
  import '@fontsource/yrsa/600.css'
  import '@fontsource/montserrat/400.css'
  import '@fontsource/montserrat/600.css'
</script>

<slot />

<style global>
  html {
    font-family: Yrsa, serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Montserrat, sans-serif;
  }
</style>
