/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
        {
          mytheme: {
            primary: "#661AE6",
            "primary-content": "#ffffff",
            secondary: "#D926AA",
            "secondary-content": "#ffffff",
            accent: "#2B88FF",
            "accent-content": "#ffffff",
            neutral: "#191D24",
            "neutral-focus": "#111318",
            "neutral-content": "#A6ADBB",
            "base-100": "#2A303C",
            "base-200": "#242933",
            "base-300": "#20252E",
            "base-content": "#A6ADBB",
                              },
      },
      ],
  },
}
