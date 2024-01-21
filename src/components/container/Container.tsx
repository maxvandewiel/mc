import styled from "styled-components";

export type ContainerProps = {};

const StyledContainer = styled.div`
    display: "flex";
    width: 100%;
    border: ${(props) => `1px solid ${(props?.theme?.colors?.onyx ? props.theme.colors.onyx : "#36313D")}`};
    background-color: ${(props) => (props?.theme?.colors?.lightBlue ? props.theme.colors.lightBlue : "#AFDBD2")};
    font-family: ${(props) => (props?.theme?.fonts ? props.theme.fonts[0] : "Roboto")};
`;

const Container: React.FC<ContainerProps> = ({
  ...props
}) => {
  return (
    <StyledContainer
      {...props}
    >
    </StyledContainer>
  );
};

export default Container;

