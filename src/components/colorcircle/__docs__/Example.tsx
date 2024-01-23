import React, { FC } from "react";
import ColorCircle, { ColorCircleProps } from "../ColorCircle";

const Example: FC<ColorCircleProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ColorCircle color="#6e9424"></ColorCircle>
    </div>
  );
};

export default Example;

