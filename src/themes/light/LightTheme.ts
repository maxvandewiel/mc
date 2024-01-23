import { Theme } from 'styled-system';
import { lightThemeColors }  from '../colors';
import space from '../space';
import breakpoints from '../breakpoints';

const lightTheme: Theme = {
  space: {
    ...space,
  },
  breakpoints,
  colors: {
    ...lightThemeColors,
  },
};

export default lightTheme;