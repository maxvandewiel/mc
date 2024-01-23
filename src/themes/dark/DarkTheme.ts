import { Theme } from 'styled-system';
import { darkThemeColors }  from '../colors';
import space from '../space';
import breakpoints from '../breakpoints';

const darkTheme: Theme = {
  space: {
    ...space,
  },
  breakpoints,
  colors: {
    ...darkThemeColors,
  },
};

export default darkTheme;