import React, { FC } from "react";
import PhoneIcon from "../PhoneIcon";

const Example: FC = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <PhoneIcon/>
    </div>
  );
};

export default Example;

