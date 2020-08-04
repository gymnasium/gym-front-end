import { theme } from '@chakra-ui/core';

export default {
  ...theme,
  fonts: {
    ...theme.fonts,
    titleFonts: `brandon-grotesque, 'Helvetica Neue', Helvetica, sans-serif`,
    default: `'Helvetica Neue', Helvetica, sans-serif`,
  },
  colors: {
    ...theme.colors,
    orange: {
      50: '#ffecdc',
      100: '#ffcaaf',
      200: '#ffa77e',
      300: '#ff854c',
      400: '#ff5f14',
      500: '#e64900',
      600: '#b43800',
      700: '#812800',
      800: '#4f1600',
      900: '#210400',
    },
    // reminder: any changes here need to go in _theme.css as well!
    gymnasium: {
      blue: '#0065de',
      orange: '#ff5f14',
      black: '#222222',
      white: '#ffffff',
      gray: '#cccccc',
      darkGray: '#444444',
      lightGray: '#a6a6a6',
      lightPageBackground: '#ebebeb',
    },
  },
};
