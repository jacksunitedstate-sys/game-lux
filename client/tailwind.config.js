module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gta-dark': '#0a0e27',
        'gta-blue': '#1a2332',
        'gta-blue-light': '#2a3f5f',
        'gta-neon': '#00ffff',
        'gta-neon-pink': '#ff00ff',
        'gta-gold': '#ffd700',
        'gta-purple': '#8b00ff',
        'gta-accent': '#00d4ff',
      },
      fontFamily: {
        'gta': ['Orbitron', 'sans-serif'],
        'body': ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'gta-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a2332 50%, #2a3f5f 100%)',
        'neon-gradient': 'linear-gradient(90deg, #00ffff 0%, #ff00ff 100%)',
        'gold-gradient': 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
      },
      boxShadow: {
        'neon': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
        'neon-pink': '0 0 10px #ff00ff, 0 0 20px #ff00ff',
        'gold': '0 0 10px #ffd700, 0 0 20px #ffd700',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
          '50%': { boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff' },
        },
      },
    },
  },
  plugins: [],
}
