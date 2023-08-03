module.exports = {
  content: ["content/**/*.md", "themes/octaTheme/layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};