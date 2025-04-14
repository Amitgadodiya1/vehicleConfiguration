module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('tailwind-scrollbar'), // (if you're using this)
    ],
  };
  