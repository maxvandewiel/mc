import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.primary ? (props?.theme?.colors?.primary ? props.theme.colors.primary : "#423EA2") : (props?.theme?.colors?.secondary ? props.theme.colors.secondary : "#625ced"))};
  background-color: ${(props) => (props.primary ? (props?.theme?.colors?.secondary ? props.theme.colors.secondary : "#625ced") : (props?.theme?.colors?.primary ? props.theme.colors.primary : "#423EA2"))};
  padding: ${(props) =>
    props.size === "small"
      ? props?.theme?.padding?.small ? props.theme.padding.small : "7px 25px 8px"
      : props.size === "medium"
      ? props?.theme?.padding?.medium ? props.theme.padding.medium : "9px 30px 11px"
      : props.size === "large"
      ? props?.theme?.padding?.large ? props.theme.padding.large : "14px 30px 16px"
      : props?.theme?.padding?.extraLarge ? props.theme.padding.extraLarge : "22px 30px 25px"};
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

