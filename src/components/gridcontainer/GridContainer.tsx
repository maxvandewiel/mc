import styled from "styled-components";

export type GridContainerProps = {
    children?: React.ReactNode;
};

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: 150px 150px 150px;
    margin: ${(props) => (props?.theme?.space?.M ? props.theme.space.M : "8")}px;
`;

const GridContainer: React.FC<GridContainerProps> = ({
  ...props
}) => {
  return (
    <StyledGridContainer
      {...props}
    >
    </StyledGridContainer>
  );
};

export default GridContainer;

