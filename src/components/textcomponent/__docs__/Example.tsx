import React, { FC } from "react";
import Text, { TextProps } from "../Text";

const Example: FC<TextProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text></Text>
    </div>
  );
};

export default Example;

