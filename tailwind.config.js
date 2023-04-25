/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/**/*.{js,jsx}"],
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'primary': '#1E776D',
        'primarysm': '#017365',
        'primarylg': '#024C42',
        'primaryxl': '#033933',
        'secondary': '#0A0A0A',
        'secondarysm': '#252525',
        'secondarylg': '#333333',
        'secondaryxl': '#4F4F4F',
        'ctext' : '#696969',
      },
    }
  },
  plugins: [],
}

