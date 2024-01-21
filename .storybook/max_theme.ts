import { create } from '@storybook/theming/create';
import cmLogo from '../assets/logo.png';

export default create({
  base: 'dark',
  brandTitle: 'Max UI Components',
  brandUrl: 'https://github.com/maxvandewiel/',
  brandImage: cmLogo,
  brandTarget: '_self',
});