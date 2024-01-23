import * as CSS from 'csstype';

export interface ThemeColors {
  primary: CSS.Property.Color;
  secondary: CSS.Property.Color;
  background: CSS.Property.Color;
  link: CSS.Property.Color;
  success: CSS.Property.Color;
  warning: CSS.Property.Color;
  error: CSS.Property.Color;
  heading: CSS.Property.Color;
  text: CSS.Property.Color;
  disabled: CSS.Property.Color;
  border: CSS.Property.Color;
}

export const lightThemeColors: ThemeColors = {
  primary: '#423EA2',
  secondary: "#625ced",
  background: "#baa5fa",
  link: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#e84118',
  heading: '#423EA2',
  text: '#000',
  disabled: '#f5222d',
  border: '#423EA2',
};

export const darkThemeColors: ThemeColors = {
  primary: '#e84118',
  secondary: "#423EA2",
  background: "#2b1863",
  link: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#e84118',
  heading: '#423EA2',
  text: '#FFF',
  disabled: '#f5222d',
  border: '#423EA2',
};

const colors: ThemeColors = {
  primary: '#423EA2',
  secondary: "#625ced",
  background: "#baa5fa",
  link: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#e84118',
  heading: '#423EA2',
  text: '#000',
  disabled: '#f5222d',
  border: '#423EA2',
};

export default colors;