module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional foundation
        primary: {
          DEFAULT: "#1a365d", // blue-900
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
          600: "#2b77cb", // blue-600
          700: "#2c5282", // blue-700
          800: "#2a4365", // blue-800
          900: "#1a365d", // blue-900
        },
        // Secondary Colors - Instagram connection
        secondary: {
          DEFAULT: "#805ad5", // purple-500
          50: "#faf5ff", // purple-50
          100: "#e9d8fd", // purple-100
          200: "#d6bcfa", // purple-200
          300: "#b794f6", // purple-300
          400: "#9f7aea", // purple-400
          500: "#805ad5", // purple-500
          600: "#6b46c1", // purple-600
          700: "#553c9a", // purple-700
          800: "#44337a", // purple-800
          900: "#322659", // purple-900
        },
        // Accent Colors - Local business warmth
        accent: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          200: "#faf089", // yellow-200
          300: "#f6e05e", // yellow-300
          400: "#ecc94b", // yellow-400
          500: "#d69e2e", // yellow-500
          600: "#d69e2e", // yellow-600
          700: "#b7791f", // yellow-700
          800: "#975a16", // yellow-800
          900: "#744210", // yellow-900
        },
        // Background Colors
        background: "#ffffff", // white
        surface: {
          DEFAULT: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
        },
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700
          secondary: "#718096", // gray-500
          muted: "#a0aec0", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
        },
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-100
          100: "#feb2b2", // red-200
          500: "#e53e3e", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          light: "#f7fafc", // gray-50
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'portfolio': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'cta': '0 4px 14px rgba(128, 90, 213, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}