module.exports = {
  processors: [],
  plugins: [
    "stylelint-scss"
  ],
  "extends": "stylelint-config-sass-guidelines",
  rules: {
    "indentation": 4,
    "number-leading-zero": null,
    "max-nesting-depth": 6,
    "selector-max-compound-selectors": 6,
    "selector-max-id" : 1,
    "order/properties-alphabetical-order": null
  },
  ignore: ["blockless-at-rules"]
};