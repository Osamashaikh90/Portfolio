import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'background': ['Montserrat'],
        'typewriter': ['JetBrains Mono'],
        'name':['Valencia'],
        'tags':['Caveat'],
        'sign':['Taprom'],
        'lora':['Lora'],
        'Croissant': ['Croissant One'],
        'headings': ['Eczar'],
        'description':['Fira Code']
      },
      backgroundImage: {
        'contact': "url('/images/glow3.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
      xxsm: '320px',
      xsm: '375px',
      mobile: '376px',
        sm: '426px',
        mid: '510px',
        midp: '610px',
      last:'690px',
      tablet: '640px',
      md: '768px',
      lg: '1024px',
      laptop: '1024px',
      xl: '1440px',
      desktop: '1280px',
      '2xl': '1536px',
    },
    },
  },
  plugins: [],
}
export default config
