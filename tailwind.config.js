/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: true,
  theme: {
    extend: {
      maxWidth: {},
      minWidth: {
        auto: 'auto',
        unset: 'unset'
      },
      width: {},
      height: {}
    }
  },
  plugins: [],
  corePlugins: { preflight: false },
}
