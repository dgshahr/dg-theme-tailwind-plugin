import plugin from "tailwindcss/plugin";
import colors from "./constants/colors";
import shadows from "./constants/shadows";
import base from "./base";
import utilities from "./utilities";

const DgThemeTailwindPlugin = plugin(
  function ({ addUtilities, addBase }) {
    addUtilities({ ...utilities });
    addBase(base);
  },
  {
    theme: {
      extend: {
        colors: colors,
        boxShadow: shadows,
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            md: "1.5rem",
          },
        },
        fontWeight: {
          bold: 699,
        },
      },
    },
  }
);

export default DgThemeTailwindPlugin;
