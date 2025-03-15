import type { Config } from 'tailwindcss';

// under theme, is where you define your own custom styles for the tailwindcss for this specific project
// you can either extend the default configurations or override them
// extend means you can later combine your own custom configurations with the default utility classes
// you must use Tailwind's predefined category names such as colors, fontFamily, fontSize, etc before adding your custom styles under either extend or override
// under each category, you can then add your custom styles through key-value pairs using your own naming
const config: Config = {
  darkMode: ['class'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '200px',
      md: '600px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'navy-0': '#63B1E5',
        'navy-1': '#07308C',
        'navy-2': '#001D6C',
        'navy-3': '#00204E',
        'nav-item': '#4F4F4E',
        'color-base-1': '#21272A',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        karla: ['var(--font-karla)', 'sans-serif'],
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        'size-base': '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '42px',
        special: '96px',
      },
      opacity: {
        '43': '0.43',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
