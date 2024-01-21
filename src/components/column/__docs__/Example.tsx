import React, { FC } from "react";
import Column, { ColumnProps } from "../Column";

const Example: FC<ColumnProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Column></Column>
    </div>
  );
};

export default Example;

