const tailwindIeVariant = require("tailwind-ie-variant");

module.exports = {
  future: {
    purgeLayersByDefault: true,
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    display: ({ after }) => after(["ie"]),
  },
  corePlugins: {
    preflight: false,
    animation: false,
  },
  plugins: [tailwindIeVariant()],
};
