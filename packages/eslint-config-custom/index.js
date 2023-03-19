module.exports = {
  plugins: ['jsx-a11y', 'import', 'prettier', '@typescript-eslint'],
  extends: ["airbnb", "next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
