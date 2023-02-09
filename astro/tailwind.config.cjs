/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      red: colors.red,
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {
      maxWidth: {
        '8xl': '86rem',
        '9xl': '100rem',
        '10xl': '120rem',
        '11xl': '148rem',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        25: '6.25rem',
      },
      transitionProperty: {
        visibility: 'visibility, opacity',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100rem',
          '@media (min-width: 768px)': {
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
          },
        },
        '.container-fluid': {
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@media (min-width: 768px)': {
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
          },
        },
        '.spacer': {
          marginTop: '3rem',
          marginBottom: '3rem',
          '@media (min-width: 768px)': {
            marginTop: '5rem',
            marginBottom: '5rem',
          },
        },
        '.padder': {
          paddingTop: '3rem',
          paddingBottom: '3rem',
          '@media (min-width: 768px)': {
            paddingTop: '5rem',
            paddingBottom: '5rem',
          },
        },
      });
    }),
  ],
};
