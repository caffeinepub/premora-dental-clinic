/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Inter', 'sans-serif'],
      },
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        teal: {
          50:  'oklch(0.97 0.02 192)',
          100: 'oklch(0.93 0.045 192)',
          200: 'oklch(0.87 0.07 192)',
          500: 'oklch(0.58 0.10 192)',
          600: 'oklch(0.50 0.09 192)',
          700: 'oklch(0.42 0.08 192)',
        },
        navy: {
          DEFAULT: 'oklch(0.18 0.025 255)',
          light: 'oklch(0.24 0.025 255)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'soft': '0 2px 16px 0 oklch(0.14 0.015 240 / 0.07)',
        'lift': '0 8px 32px 0 oklch(0.14 0.015 240 / 0.12)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
