// This will tell Tailwind, which files are using Tailwind utilities. This is also where you can customise Tailwind.

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{html,js}'], // Include any files that you want to apply the styles to
    theme: {
      extend: {}
    },
    plugins: []
  };