import React, { FC } from "react";
import Container, { ContainerProps } from "../Container";

const Example: FC<ContainerProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Container>This is a container text</Container>
    </div>
  );
};

export default Example;

