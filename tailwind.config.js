const tailwindIeVariant = require("tailwind-ie-variant");

module.exports = {
  future: {
    purgeLayersByDefault: true,
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["index.pug"],
  darkMode: false, // or 'media' or 'class'
  separator: "_",
  variants: {
    display: ({ after }) => after(["ie"]),
  },
  corePlugins: {
    preflight: false,
    animation: false,
  },
  plugins: [tailwindIeVariant()],
};
