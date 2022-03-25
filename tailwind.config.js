module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'whitealice': '#ECF5FD',
        'bluejeans': '#63ADF2',
        'grayjeans': '#304D6D',
        'blueprussian': '#1F3247',
      },
      height: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['Circular', 'Helvetica', 'Arial', 'sans-serif'],
    },
    },
  },
  plugins: [],
}