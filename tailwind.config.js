export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   menu: 'var(--color-menu)',
      //   'text-primary': 'var(--color-text-primary)',
      //   white: 'var(--color-white)',
      //   black: 'var(--color-black)',
      //   blue: 'var(--color-blue)',
      //   pink: 'var(--color-pink)',
      //   yellow: 'var(--color-yellow)',
      //   red: 'var(--color-red)',
      //   'hypr-blue': 'var(--color-hypr-blue)',
      //   purple: 'var(--color-purple)',
      //   'off-black': 'var(--color-off-black)',
      //   'energetic-purple': 'var(--color-energetic-purple)',
      // },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
}

// tailwind.config.js
