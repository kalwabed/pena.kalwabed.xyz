import { transformerVariantGroup, presetTypography } from 'unocss';
import { defineConfig } from 'unocss/vite';
import { presetWind } from '@unocss/preset-wind';

export default defineConfig({
  presets: [presetWind(), presetTypography()],
  transformers: [transformerVariantGroup()],
  theme: {
    fontFamily: {
      sans: '"Open Sans", sans-serif',
      heading: 'Montserrat, sans-serif'
    }
  }
});
