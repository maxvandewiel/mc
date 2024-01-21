import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import max_theme from './max_theme';

addons.setConfig({
  theme: max_theme,
});