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
  font-family: ${(props) => (props?.theme?.fonts ? props.theme.fonts[0] : "Roboto")};
  font-size: ${(props) => (props?.theme?.fontSizes?.medium ? props.theme.fontSizes.medium : "2em")};
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.primary ? (props?.theme?.colors?.lightBlue ? props.theme.colors.lightBlue : "#FF5655") : (props?.theme?.colors?.onyx ? props.theme.colors.onyx : "#f4c4c4"))};
  background-color: ${(props) => (props.primary ? (props?.theme?.colors?.onyx ? props.theme.colors.onyx : "#f4c4c4") : (props?.theme?.colors?.lightBlue ? props.theme.colors.lightBlue : "#FF5655"))};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
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

