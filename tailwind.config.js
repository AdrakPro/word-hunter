/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/lib/**/*.{js,ts,svelte}',
    './src/routes/**/*.{js,ts,svelte}'
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#46bddf',
        100: '#082932',
        200: '#115263',
        300: '#197a95',
        400: '#22a3c7',
        500: '#46bddf',
        600: '#69cbe6',
        700: '#8ed8ec',
        800: '#b4e5f2',
        900: '#d9f2f9'
      },
      secondary: {
        DEFAULT: '#52d273',
        100: '#0c2e14',
        200: '#185c29',
        300: '#248b3d',
        400: '#30b952',
        500: '#52d273',
        600: '#74db8d',
        700: '#96e4aa',
        800: '#b9edc6',
        900: '#dcf6e3'
      },
      light_grey: {
        DEFAULT: '#b3b8bc',
        100: '#232527',
        200: '#454a4e',
        300: '#686f75',
        400: '#8c9499',
        500: '#b3b8bc',
        600: '#c2c6c9',
        700: '#d2d4d7',
        800: '#e1e3e4',
        900: '#f0f1f2'
      },
      gray: {
        DEFAULT: '#484848',
        100: '#0e0e0e',
        200: '#1d1d1d',
        300: '#2b2b2b',
        400: '#393939',
        500: '#484848',
        600: '#6c6c6c',
        700: '#919191',
        800: '#b6b6b6',
        900: '#dadada'
      },
      white: {
        DEFAULT: '#FDF0D5'
      }
    },
    extend: {}
  },
  plugins: []
};
