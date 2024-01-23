import React, { FC } from "react";
import Card, { CardProps } from "../Card";

const Example: FC<CardProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card title="Title" content="Content" />
    </div>
  );
};

export default Example;

