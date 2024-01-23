import styled from "styled-components";

export type ContainerProps = {};

const StyledContainer = styled.div`
    display: "flex";
    width: 100%;
    border: ${(props) => `1px solid ${(props?.theme?.colors?.secondary ? props.theme.colors.secondary : "black")}`};
    color: ${(props) => (props?.theme?.colors?.text ? props.theme.colors.text : "black")};
    background-color: ${(props) => (props?.theme?.colors?.background ? props.theme.colors.background : "white") };
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

