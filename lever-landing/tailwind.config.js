export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#012422',
        raised: '#1B3A39',
        accent: '#FAF771',
      },
      fontFamily: {
        display: ['"Clash Grotesk"', 'sans-serif'],
        body: ['"Geist"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: { content: '1200px' },
      borderRadius: { card: '32px', btn: '100px' },
      backdropBlur: { card: '20px' },
    },
  },
}
