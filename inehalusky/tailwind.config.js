module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'], // add your preferred file extensions here
  theme: {
    fontFamily: {
      'body': ['"Poppins"'],
      'h1': ['"Brush Script MT"'],
    },
    colors: {
      'primary': '#FDE374',
      'secondary': '#A77934',
      'white': '#fff',
      'black': '#000',
      'grey': '#949494',
      'red': '#DB1318',
      transparent: 'transparent',
      'borderGrey': 'rgb(0, 0, 0, 20 %)',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
