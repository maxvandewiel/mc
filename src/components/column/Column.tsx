import styled from "styled-components";

export type ColumnProps = {};

const StyledColumn = styled.div`
    float: left;
    width: 100%
    @media only screen and (min-width: 768px) {
      width: ${(props) => props?.theme?.span ? props.theme.span : "8.33"}%;
    }
`;

const Column: React.FC<ColumnProps> = ({
  ...props
}) => {
  return (
    <StyledColumn
      {...props}
    >
    </StyledColumn>
  );
};

export default Column;

