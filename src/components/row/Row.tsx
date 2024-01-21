import styled from "styled-components";

export type RowProps = {};

const StyledRow = styled.div`
    &::after {
      content: "";
      clear: both;
      display: table;
    }
`;

const Row: React.FC<RowProps> = ({
  ...props
}) => {
  return (
    <StyledRow
      {...props}
    >
    </StyledRow>
  );
};

export default Row;

