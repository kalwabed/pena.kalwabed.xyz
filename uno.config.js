import { transformerVariantGroup, presetTypography, presetUno, presetIcons } from 'unocss';
import { defineConfig } from 'unocss/vite';
import presetRemToPx from '@unocss/preset-rem-to-px';

const mauveDark = {
  mauve1: '#161618',
  mauve2: '#1c1c1f',
  mauve3: '#232326',
  mauve4: '#28282c',
  mauve5: '#2e2e32',
  mauve6: '#34343a',
  mauve7: '#3e3e44',
  mauve8: '#504f57',
  mauve9: '#706f78',
  mauve10: '#7e7d86',
  mauve11: '#a09fa6',
  mauve12: '#ededef',
};

const plum = {
  plum1: '#fefcff',
  plum2: '#fff8ff',
  plum3: '#fceffc',
  plum4: '#f9e5f9',
  plum5: '#f3d9f4',
  plum6: '#ebc8ed',
  plum7: '#dfafe3',
  plum8: '#cf91d8',
  plum9: '#ab4aba',
  plum10: '#a43cb4',
  plum11: '#9c2bad',
  plum12: '#340c3b',
};

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx(),
    presetIcons({
      collections: {
        rdi: () => import('@iconify-json/radix-icons/icons.json').then(i => i.default),
      },
    }),
    presetTypography({
      cssExtend: {
        a: {
          'text-decoration': 'none',
        },
        h1: {
          'font-size': '1.875rem',
        },
        h2: {
          'font-size': '1.5rem',
        },
        h3: {
          'font-size': '1.25rem',
        },
        p: {
          'line-height': '1.625',
        },
        'h1 a, h2 a, h3 a, h4 a, h5 a': {
          'font-weight': 600,
        },
        'del, del *': {
          'font-style': 'italic',
          'text-decoration': 'line-through',
        },
        'p > a, li > a': {
          position: 'relative',
          display: 'inline-block',
          'z-index': 5,
          color: 'var(--color-blue)',
          'background-image': 'linear-gradient(var(--color-blue), var(--color-blue))',
          'background-size': '0 2px',
          'background-repeat': 'no-repeat',
          'background-position': 'bottom left',
          transition: 'background-size ease-out 200ms',
        },
        'p > a:hover, li > a:hover': {
          'background-size': '100% 2px',
        },
        strong: {
          color: 'var(--un-prose-headings)',
        },
        blockquote: {
          'border-left': '4px solid #78716c',
          'padding-left': '1rem',
          'margin-left': '0',
          'margin-right': '0',
          'font-style': 'italic',
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
  rules: [
    [
      /^prose-custom$/,
      (_, { theme }) => ({
        '--font-heading': '"Montserrat", sans-serif',
        '--font-sans': '"Open Sans", sans-serif',
        '--un-prose-headings': theme.colors.gray[700],
        '--un-prose-body': theme.colors.gray[600],
        '--color-blue': theme.colors.blue[500],
      }),
      { layer: 'typography' },
    ],
  ],
  theme: {
    fontFamily: {
      sans: '"Open Sans", sans-serif',
      heading: 'Montserrat, sans-serif',
    },
    colors: {
      mauveOne: mauveDark.mauve1,
      mauveTwo: mauveDark.mauve2,
      mauveThree: mauveDark.mauve3,
      mauveFour: mauveDark.mauve4,
      mauveFive: mauveDark.mauve5,
      mauveSix: mauveDark.mauve6,
      mauveEleven: mauveDark.mauve11,
      mauveTwelve: mauveDark.mauve12,
      plumNine: plum.plum9,
      plumEleven: plum.plum11,
    },
  },
});
