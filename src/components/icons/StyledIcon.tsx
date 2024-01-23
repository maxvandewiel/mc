import styled from "styled-components";

const StyledIcon = styled.svg`
  flex: none;
  width: 48px;
  height: 48px;
  fill: none;
  stroke: ${(props) => (props?.theme?.colors?.text ? props.theme.colors.text : "black") };
`;

export default StyledIcon;