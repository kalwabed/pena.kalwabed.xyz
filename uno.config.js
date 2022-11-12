import { transformerVariantGroup, presetTypography, presetUno } from 'unocss';
import { defineConfig } from 'unocss/vite';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx(),
    presetTypography({
      cssExtend: {
        a: {
          'text-decoration': 'none'
        },
        h1: {
          'font-size': '1.875rem'
        },
        h2: {
          'font-size': '1.5rem'
        },
        h3: {
          'font-size': '1.25rem'
        },
        p: {
          'line-height': '1.625'
        },
        'h1 a, h2 a, h3 a, h4 a, h5 a': {
          'font-weight': 600
        },
        'del, del *': {
          'font-style': 'italic',
          'text-decoration': 'line-through'
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
          transition: 'background-size ease-out 200ms'
        },
        'p > a:hover, li > a:hover': {
          'background-size': '100% 2px'
        },
        strong: {
          color: 'var(--un-prose-headings)'
        },
        blockquote: {
          'border-left': '4px solid #78716c',
          'padding-left': '1rem',
          'margin-left': '0',
          'margin-right': '0',
          'font-style': 'italic'
        }
      }
    })
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
        '--color-blue': theme.colors.blue[500]
      }),
      { layer: 'typography' }
    ]
  ],
  theme: {
    fontFamily: {
      sans: '"Open Sans", sans-serif',
      heading: 'Montserrat, sans-serif'
    }
  }
});
