/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fbf8f2",
          100: "#f8f4ec",
          200: "#f0e9d9"
        },
        sage: {
          50: "#f4f7f2",
          100: "#e6ede0",
          200: "#c9d6c0",
          300: "#a8bd9c",
          400: "#8aa57e",
          500: "#6e8a63",
          600: "#5d7652",
          700: "#4a5e42",
          800: "#3a4b33",
          900: "#2a3724"
        },
        rose: {
          200: "#e8d2d2",
          300: "#d9b6b6",
          400: "#c89999"
        },
        ink: {
          DEFAULT: "#2a2a2a",
          soft: "#4a4a4a",
          muted: "#6b6b6b"
        }
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"]
      },
      maxWidth: {
        prose: "65ch",
        reading: "42rem",
        page: "64rem"
      },
      letterSpacing: {
        tightish: "-0.015em"
      }
    }
  },
  plugins: []
};
