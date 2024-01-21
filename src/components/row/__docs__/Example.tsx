import React, { FC } from "react";
import Row, { RowProps } from "../Row";

const Example: FC<RowProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Row></Row>
    </div>
  );
};

export default Example;

