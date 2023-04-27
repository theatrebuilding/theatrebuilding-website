module.exports = {
  content: ["content/**/*.md", "themes/octaTheme/layouts/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};