import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
					DEFAULT: '#8b15ba',
					50: '#f8e8fd',
          100: '#f0d1fa',
          200: '#e2a3f6',
          300: '#d576f1',
          400: '#c74aed',
          500: '#8b15ba',
          600: '#7911a4',
          700: '#660e8d',
          800: '#530b76',
          900: '#420961',
          950: '#2b0441'
				},
				secondary: {
					DEFAULT: '#f18f01',
					50: '#fff5e6',
          100: '#ffeacc',
          200: '#ffd699',
          300: '#ffc166',
          400: '#ffad33',
          500: '#f18f01',
          600: '#d87d01',
          700: '#bf6c01',
          800: '#a65b01',
          900: '#8e4a00',
          950: '#5f3100'
				},
				accent: {
					DEFAULT: '#8b0000',
					50: '#faeaea',
          100: '#f5d5d5',
          200: '#eaa5a5',
          300: '#df7575',
          400: '#d44545',
          500: '#8b0000',
          600: '#7a0000',
          700: '#690000',
          800: '#580000',
          900: '#480000',
          950: '#2d0000'
				},
				info: {
					DEFAULT: '#424242',
					50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#424242',
          600: '#373737',
          700: '#2e2e2e',
          800: '#212121',
          900: '#1b1b1b',
          950: '#121212'
				},
        error: colors.red,
				disabled: colors.gray,
				success: colors.green,
				warning: colors.yellow,
        dark: '#1b1b1b',
        light: '#f5f5f5',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',
        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',
        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)',
        circularDarkMd: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)',
        circularDarkSm: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)',
      },
      boxShadow: {
        '3xl': '0 15px 15px 1px rgba(80,230,217, 0.4)',
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        xs: { max: "479px" },
      }
    }
  },
  plugins: [
    function ({ addVariant }: { addVariant: (name: string, generator: string) => void }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    }
  ]
};

export default config;
