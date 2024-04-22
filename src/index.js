const plugin = require("tailwindcss/plugin");
const danaFont = require("../assets/fonts");

const DgThemeTailwindPlugin = plugin(
  function ({ addBase }) {
    addBase(danaFont);
  },
  {
    theme: {
      extend: {
        colors: {
          primary: {
            50: "rgb(240 243 255 / <alpha-value>)",
            100: "rgb(200 211 247 / <alpha-value>)",
            200: "rgb(158 176 240 / <alpha-value>)",
            300: "rgb(117 144 235 / <alpha-value>)",
            400: "rgb(76 110 229 / <alpha-value>)",
            500: "rgb(40 82 228 / <alpha-value>)",
            600: "rgb(21 59 191 / <alpha-value>)",
            700: "rgb(16 44 143 / <alpha-value>)",
            800: "rgb(10 30 95 / <alpha-value>)",
            900: "rgb(4 13 48 / <alpha-value>)",
          },
          secondary: {
            50: "rgb(245 250 250 / <alpha-value>)",
            100: "rgb(226 243 243 / <alpha-value>)",
            200: "rgb(198 231 231 / <alpha-value>)",
            300: "rgb(158 214 217 / <alpha-value>)",
            400: "rgb(124 203 207 / <alpha-value>)",
            500: "rgb(0 186 188 / <alpha-value>)",
            600: "rgb(0 155 157 / <alpha-value>)",
            700: "rgb(0 124 125 / <alpha-value>)",
            800: "rgb(0 93 94 / <alpha-value>)",
            900: "rgb(0 62 63 / <alpha-value>)",
          },
          success: {
            50: "rgb(236 253 249 / <alpha-value>)",
            100: "rgb(209 250 240 / <alpha-value>)",
            200: "rgb(167 243 224 / <alpha-value>)",
            300: "rgb(110 231 201 / <alpha-value>)",
            400: "rgb(52 211 171 / <alpha-value>)",
            500: "rgb(16 185 143 / <alpha-value>)",
            600: "rgb(5 150 114 / <alpha-value>)",
            700: "rgb(4 120 91 / <alpha-value>)",
            800: "rgb(6 95 73 / <alpha-value>)",
            900: "rgb(6 78 60 / <alpha-value>)",
          },
          warning: {
            50: "rgb(255 246 224 / <alpha-value>)",
            100: "rgb(254 233 178 / <alpha-value>)",
            200: "rgb(154 222 142 / <alpha-value>)",
            300: "rgb(254 212 107 / <alpha-value>)",
            400: "rgb(253 199 63 / <alpha-value>)",
            500: "rgb(253 187 19 / <alpha-value>)",
            600: "rgb(216 158 13 / <alpha-value>)",
            700: "rgb(162 119 6 / <alpha-value>)",
            800: "rgb(108 78 2 / <alpha-value>)",
            900: "rgb(54 39 0 / <alpha-value>)",
          },
          error: {
            50: "rgb(255 235 236 / <alpha-value>)",
            100: "rgb(250 209 212 / <alpha-value>)",
            200: "rgb(237 161 166 / <alpha-value>)",
            300: "rgb(227 120 127 / <alpha-value>)",
            400: "rgb(219 87 96 / <alpha-value>)",
            500: "rgb(213 28 41 / <alpha-value>)",
            600: "rgb(167 5 16 / <alpha-value>)",
            700: "rgb(117 0 8 / <alpha-value>)",
            800: "rgb(87 0 6 / <alpha-value>)",
            900: "rgb(71 0 5 / <alpha-value>)",
          },
          gray: {
            50: "rgb(248 250 252 / <alpha-value>)",
            100: "rgb(241 245 249 / <alpha-value>)",
            200: "rgb(226 232 240 / <alpha-value>)",
            300: "rgb(203 213 225 / <alpha-value>)",
            400: "rgb(148 163 184 / <alpha-value>)",
            500: "rgb(100 116 139 / <alpha-value>)",
            600: "rgb(71 85 105 / <alpha-value>)",
            700: "rgb(51 65 85 / <alpha-value>)",
            800: "rgb(30 41 59 / <alpha-value>)",
            900: "rgb(15 23 42 / <alpha-value>)",
          },
        },
      },
    },
  }
);

module.exports = DgThemeTailwindPlugin;
