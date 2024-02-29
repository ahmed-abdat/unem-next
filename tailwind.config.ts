import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        tajawal: ['var(--font-tajawal)'],
        aljazira: ['var(--font-aljazira)'],
        roboto : ['var(--font-roboto)'],
        rb : ['var(--font-rb)'],
      },
      colors: {
        'disabeld-btn' : '#58cc10',
        'news-border' : '#13c867',
        'whtssap-label' : '#077038',
        'btn' : '#58cc02',
        'btn-hover' : '#2fb30c',
        'primary-color' : '#26a306',
        'main' : '#f8f8f8',
        'green-1': '#186a02',
        'green-2': '#26a306',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      }, 
      gridTemplateColumns : {
        'mobile' : 'repeat(1, minmax(250px, 1fr))',
        'tablet' : 'repeat(2, minmax(300px, 1fr))',
        'desktop' : 'repeat(3, minmax(400px, 1fr))',
      },
      lineHeight: {
        'poste-text' : '2.3'
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(272deg, var(--tw-gradient-stops))',
        'gradient-footer': 'linear-gradient(350deg, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'option' : '0 8px 17px #0000000f',
        'btne' : '0 4px #4dac05'
      },
      keyframes: {
        spinner: {
          '100%': { transform: 'rotate(1turn)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'spin': 'spinner 1s infinite linear',
        'spin-slow': 'spinner 2s infinite linear',
        'spin-slowest': 'spinner 3s infinite linear',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config