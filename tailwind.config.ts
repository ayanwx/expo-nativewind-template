/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3A81F5",
        secondary: "#3A81F5AE",
        bg: {
          default: "#000015",
          alt: "#15152B",
        },
        fg: {
          default: "#F3F4F6",
          alt: "#B3B3B3",
        },
      },
      fontFamily: {
        Varela_Round: ["VarelaRound_400Regular"],
        Ubuntu_Mono: ["UbuntuMono_400Regular"],
        Ubuntu_Mono_Bold: ["UbuntuMono_700Bold"],
        Rubik: ["Rubik_400Regular"],
        Rubik_Bold: ["Rubik_700Bold"],
      },
      animation: {
        slow_spin: "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
