import React, { FC } from "react";
import Body, { BodyProps } from "../Body";

const Example: FC<BodyProps> = ({}) => {
  return (
    <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
      <Body>This is a body text</Body>
    </div>
  );
};

export default Example;

