module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 3s ease-out",
      },

      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      }),
    },
  },
  plugins: [],
};
