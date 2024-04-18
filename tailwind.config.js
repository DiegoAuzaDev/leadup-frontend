/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        light: "#0CA5E9",
        DEFAULT: "#082F49",
        dark: "#13161a",
      },
      surface: {
        light: "#F2F2F2",
        DEFAULT: "#E0E0E0",
        dark: "#8D8D8D",
      },
      secondary: {
        DEFAULT: "#387bb2",
        dark: "#2c6593",
      },
      success: {
        light: "#3CB371",
        DEFAULT: "#45946D",
        dark: "#2E8A5A",
      },
      red: {
        light: "#FF5738",
        DEFAULT: "#C52200",
        dark: "#993D29",
      },
      yellow: {
        light: "#FFA500",
        DEFAULT: "#B27400",
        dark: "#BF8433",
      },
      white: "#fff",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      body: "Outfit",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "clamp(1.2rem, 2vw, 1.333rem)",
      xl: "clamp(1.44rem, 3vw, 1.777rem)",
      "2xl": "clamp(1.728rem, 4.5vw, 2.369rem)",
      "3xl": ["clamp(2.074rem, 5.75vw, 3.157rem)", "1.3"],
      "4xl": ["clamp(2.488rem, 6.75vw, 4.209rem)", "1.2"],
      "5xl": ["clamp(2.986rem, 7.5vw, 5.61rem)", "1.1"],
    },
    screens: {
      sm: "25em",
      md: "45em",
      lg: "60em",
    },
    extend: {
      borderRadius: {
        custom: "20px",
      },
    },
  },
  plugins: [],
};
