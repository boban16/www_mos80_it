// import background from './assets/background.svg';

export const space = [0, 4, 8, 16, 32, 64];

export const colors = {
  primary: '#FB948F',
  secondary: '#F2CAC8',
  tertiary: '#C36B84',
  quaternary: '#FEBB75',
  error: '#EB5757',
  success: '#27AE60',
  gray: ['#4F3F44', '#7B6F72', '#A79FA1', '#D3CFD0', '#EAE8E9', '#F4F3F4', '#FAF9F9', '#FFFFFF'],
  gradients: {
    primary: 'linear-gradient(165.57deg, #FB948F 22.12%, #DC2789 77.88%)',
    secondary: 'linear-gradient(165.57deg, #F2CAC8 22.32%, #EE6DAB 77.88%)',
    tertiary: 'linear-gradient(165.57deg, #C36B84 22.12%, #8735AE 77.88%)',
    quaternary: 'linear-gradient(165.57deg, #FEBB75 22.12%, #FE8E75 77.88%)',
  },
  svgGradients: {
    primary: {
      from: '#FB948F',
      to: '#DC2789'
    },
    secondary: {
      from: '#F2CAC8',
      to: '#EE6DAB'
    },
    tertiary: {
      from: '#C36B84',
      to: '#8735AE'
    },
    quaternary: {
      from: '#FEBB75',
      to: '#FE8E75'
    },
  }
};

export const typography = {
  googleFont:
    'https://fonts.googleapis.com/css?family=Sarabun:300,400,400i,500,600,700,800&display=swap',
  fontFamily: 'Sarabun, sans-serif',
  color: colors.gray[0],
  sizes: {
    base: 18,
  },
};

export const body = {
  // backgroundImage: `url(${background})`,
  // backgroundSize: 'cover',
  backgroundColor: colors.gray[7],
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: colors.gray[0],
};

export const transition = {
  base: '.2s ease-in-out',
  all: 'all .2s ease-in-out',
};

export const zIndex = {
  navbar: 1000,
  sticky: 1005,
  menuNav: 1020,
  navbarDropdown: 990,
};

export const borderRadius = {
  small: 8,
  normal: 12,
  large: 15,
  xLarge: 25,
};

export const breakpoints = ['450px', '768px', '1170px', '1440px'];
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];
