module.exports = {
  root: true,
  env: {
    "browser": true
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 2015,
    "parser": 'babel-eslint'
  },
  globals: {
    "$": true,
    "hljs": true,
    "tocbot": true,
    "NProgress": true,
    "Gitalk": true,
    "md5": true,
    "PerfectScrollbar": true,
    "Typed": true,
    "algoliasearch": true,
    "dayjs": true,
    "Swiper": true,
    "Plyr": true,
    "LazyLoad": true,
    "Valine": true,
    "DisqusJS": true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off"
  }
}
