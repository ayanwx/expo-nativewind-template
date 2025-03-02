/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
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
