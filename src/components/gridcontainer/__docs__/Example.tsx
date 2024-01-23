import React, { FC } from "react";
import GridContainer, { GridContainerProps } from "../GridContainer";

const Example: FC<GridContainerProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <GridContainer></GridContainer>
    </div>
  );
};

export default Example;

