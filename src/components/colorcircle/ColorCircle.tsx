import styled from "styled-components";

export type ColorCircleProps = {
    color?: string;
};

const StyledColorCircle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
`;

const ColorCircle: React.FC<ColorCircleProps> = ({
  ...props
}) => {
  return (
    <StyledColorCircle
      {...props}
    >
    </StyledColorCircle>
  );
};

export default ColorCircle;

