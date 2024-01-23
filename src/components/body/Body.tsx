import styled from "styled-components";

export type BodyProps = {};

const StyledBody = styled.div`
    display: "flex";
    width: 100%;
    height: 100%;
    color: ${(props) => (props?.theme?.colors?.text ? props.theme.colors.text : "black")};
    background-color: ${(props) => (props?.theme?.colors?.background ? props.theme.colors.background : "white") };
`;

const Body: React.FC<BodyProps> = ({
  ...props
}) => {
  return (
    <StyledBody
      {...props}
    >
    </StyledBody>
  );
};

export default Body;

