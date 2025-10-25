/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        military: {
          olive: '#6b7c32',
          tan: '#d4af37',
          brass: '#b08d57',
          dark: '#1a1a1a',
          light: '#f5f5dc'
        }
      },
      fontFamily: {
        'military': ['Courier New', 'monospace'],
        'serif': ['Times New Roman', 'serif']
      }
    },
  },
  plugins: [],
}