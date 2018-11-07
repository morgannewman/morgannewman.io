import Typography from 'typography'

// Initialize Typography rules
const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto Condensed',
      weights: [400],
    },
    {
      name: 'Roboto Mono',
      weights: [400, 700],
    },
  ],
  headerFontFamily: ['Roboto Condensed', 'Avenir Next', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'Georgia', 'serif'],
}).injectStyles()

export default typography
