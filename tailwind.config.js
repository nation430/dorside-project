module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        width: true,
      },
      colors: {
        primary: {
          900: "#3D9445",
        },
        secondary: {
          900: "#64A96A",
        },
        graylight: {
          200: "#DCDCDC66",
        },
      },
    },
  },
  plugins: [],
};
