const colors = require('tailwindcss/colors');

module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      width: {
        '128': '36rem',
        '200': '47.25rem',
        '256': '55rem',
      },
      height: {
        '128': '36rem',
        '200': '47.25rem',
        '256': '55rem',
      },
      colors: {
        colors,
        'white': '#ffffff',
        'black': '#06060c',
        'black-01': '#030305',
        'main': '#4B4B74',
        'color-01': '#25253A',
        'color-02': '#9975F6',
        'color-03': '#434367',
        'color-04': '#0F0F1D',
        'color-05': '#BD922B',
        'color-06': '#21BF75',
        'color-07': '#0C0C17',
        'color-08': '#8EC8FD',
        'color-09': '#27273E',
        'color-10': '#131322',
        'color-11': '#EBE7F6',
        'color-12': '#FFFFFF',
      },
      boxShadow: {
        'inner-01': 'inset 0px 87.3046px 129.838px -80.5888px rgba(255, 255, 255, 0.5), inset 0px 15.6701px 24.6244px -8.95432px #FFFFFF, inset 0px -183.563px 152.223px -143.269px rgba(96, 68, 144, 0.3), inset 0px 219.381px 223.858px -107.452px rgba(202, 172, 255, 0.3), inset 0px 8.95432px 40.2944px rgba(154, 146, 210, 0.3), inset 0px 2.23858px 89.5431px rgba(227, 222, 239, 0.2)',
        'inner-02': 'inset 0px 30px 100px -48px rgba(193, 171, 248, 0.3), inset 0px 4px 18px rgba(153, 117, 246, 0.3), inset 0px 1px 40px rgba(188, 162, 254, 0.2)',
      },
      borderRadius: {
        'style-01': '3rem',
        'style-02': '1.875rem',
        'style-03': '1.125rem',
      },
      flexGrow: {
        '0.5': '0.5'
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: { 
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))', 
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))', 
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))', 
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))', 
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))', 
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))', 
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))', 
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))', 
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))', 
        'conic-spec-01': "conic-gradient(from 52.05deg at 50.61% 60.33%, #56AEFF -73.13deg, #EC78FF 67.5deg, #966CF4 191.25deg, #56AEFF 286.87deg, #EC78FF 427.5deg)",
      },
      fontFamily: {
        'along-sans-s2': ['"Along Sans s2"'],
      }
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};

