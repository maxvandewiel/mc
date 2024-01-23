import React from 'react';
import styled from 'styled-components';
import {
  borderRadius,
  BorderRadiusProps as BrProps,
  color,
  fontFamily,
  FontFamilyProps as FfProps,
  fontSize,
  FontSizeProps as FsProps,
  fontStyle,
  FontStyleProps as FStyleProps,
  fontWeight,
  FontWeightProps as FwProps,
  letterSpacing,
  LetterSpacingProps as LSProps,
  lineHeight,
  LineHeightProps as LhProps,
  size,
  SizeProps as SzProps,
  space,
  SpaceProps as SProps,
  textAlign,
  TextAlignProps as TaProps,
  textStyle,
  TextStyleProps as TSProps,
} from 'styled-system';

export type SpaceProps = SProps & { children?: React.ReactNode };
export type FontSizeProps = FsProps & { children?: React.ReactNode };
export type FontStyleProps = FStyleProps & { children?: React.ReactNode };
export type SizeProps = SzProps & { children?: React.ReactNode };
export type TextStyleProps = TSProps & { children?: React.ReactNode };
export type LetterSpacingProps = LSProps & { children?: React.ReactNode };
export type FontFamilyProps = FfProps & { children?: React.ReactNode };
export type FontWeightProps = FwProps & { children?: React.ReactNode };
export type BorderRadiusProps = BrProps & { children?: React.ReactNode };
export type TextAlignProps = TaProps & { children?: React.ReactNode };
export type LineHeightProps = LhProps & { children?: React.ReactNode };


export type StyledSystemProps =
  | SpaceProps
  | FontSizeProps
  | FontStyleProps
  | SizeProps
  | TextStyleProps
  | LetterSpacingProps
  | FontFamilyProps
  | FontWeightProps
  | BorderRadiusProps
  | LineHeightProps
  | TextAlignProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { color: string; as?: keyof JSX.IntrinsicElements | React.ComponentType<any> }
  & { children?: React.ReactNode };

const DynamicStyledSystemComponent = styled.div`
  ${space}
  ${fontSize}
  ${fontStyle}
  ${size}
  ${color}
  ${textStyle}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${lineHeight}
  ${textAlign}
`;

export default DynamicStyledSystemComponent;
