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
      <Container></Container>
    </div>
  );
};

export default Example;

