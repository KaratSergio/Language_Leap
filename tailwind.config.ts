import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textColor: 'rgba(18, 20, 23, 0.8)',
        alfaGrey: 'rgba(18, 20, 23, 0.7)',
        borderColor: 'rgba(18, 20, 23, 0.2)',
        borderGrey: '#8A8A89',
        mainBlack: '#121417',
        btnColorY: '#F4C550',
        btnColorYh: '#FFDC86',
        yellowLight: '#FBE9BA',
        pinkBg: '#F8F8F8',
        blueLogo: '#338AF3',
        yellowLogo: '#FFDA44',
        yellowStar: '#FFC531',
        pageBg: '#F8F8F8',
      },
      width: {
        'text-modal': '438px',
        '255': '255px',
        'nav-btn-reg': '166px',
        '1312': '1312px',
        '548': '548px',
        '968': '968px',
      },
      maxWidth: {
        'nav-bar': '1184px',
        'nav-page': '661px',
        '1376': '1376px',
        '1312': '1312px',
        '1184': '1184px',
        '968': '968px',
        '720': '720px',
        '568': '568px',
        '548': '548px',
        '471': '471px',
        '232': '232px',
        'text-modal': '438px',
      },
      height: {
        '14': '14px',
        '350': '350px',
      },
      padding: {
        '18': '18px',
        '10': '10px',
        '14': '12px',
        '39': '39px',
        '88': '88px',
        '98': '98px',
        '108': '108px',
      },
      margin: {
        '18': '18px',
      },
      borderRadius: {
        '30': '30px',
        '35': '35px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '40px': '40px',
      },
      lineHeight: {
        '48px': '48px',
        '22px': '22px',
        '56': '56px',
      },
      letterSpacing: {
        m2: '-0.02em',
      },
      spacing: {
        'border-spacing-10': '2.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
export default config;
