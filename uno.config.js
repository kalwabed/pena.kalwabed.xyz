import { transformerVariantGroup } from 'unocss'
import { defineConfig } from 'unocss/vite'
import { presetWind } from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetWind()
    // presetTypography(),
  ],
  transformers: [transformerVariantGroup()]
})
