/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth: {
        '75%': '75%',
        '65%': '65%',
        '50%': '50%',
        '35%': '35%',
        '17%': '17%'
      },
      Width: {
        '285px': '285px',
        '200px': '200px'
      },
      backgroundColor: {
        'custom-green': '#52B947',
        'custom-darkgreen': '#3CB98A',
        'custom-grey': '#D9D9D9',
        'custom-light-grey': '#F3F3F9',
        'custom-midnightgreen': '#286722',
        'custom-white': '#F3F3F9',
        'custom-light-green': '#35977F1A',
        'custom-light-purple': '#7855FF1A'
      },
      borderRadius: {
        'custom': '10px',
      },
      borderColor: {
        'custom': '#EFEFEF',
        'input-color': '#E5E5EA',
        'wait-list': '#286722',
        'custom-grey': '#0000001A'
      },
      height: {
        'custom': '356px'
      },
      colors: {
        'custom': '#8E8E93',
        'custom-green': '#3CB98A',
        'custom-darkgreen': '#286722',
        'custom-darkpurple': '#7855FF'

      },
      fill: {
        'custom': '#3CB98A'
      }
    },
  },
  plugins: [],
}

