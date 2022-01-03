module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {},
  },
  options: {
    safelist: [
      /data-theme$/,
    ]
  },
  plugins: [require('daisyui'),],
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
}
