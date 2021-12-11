module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      mono: ['monospace'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 200s linear infinite',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark': '#0D000D',
        'brand-cream': '#FFF8E7',
        'brand-pink': '#FF77F9',
        'brand-orange': '#FFA47F',
        'brand-yellow': '#F9E800',
        'brand-green': {
          400: '#C3FF6F',
          500: '#9FF297'
        },
        'brand-cyan': '#87FFDD',
        'brand-blue': {
          400: '#35C7FF',
          500: '#97F7FF'
        },
        'brand-purple': '#A992FF',
        'brand-red': '#FD4796',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  }
}