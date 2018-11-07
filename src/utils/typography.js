import Typography from 'typography'

// Initialize Typography rules
const typography = new Typography({
  headerFontFamily: ['Roboto Condensed', 'Avenir Next', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'Georgia', 'serif'],
}).injectStyles()

export default typography
