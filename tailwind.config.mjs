/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0908',
        parchment: '#F4F0E8',
        'bauhaus-red': '#D40000',
        'bauhaus-blue': '#1B4FD8',
        'bauhaus-yellow': '#F0C000',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['DM Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
