import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PhoneIcon from "../PhoneIcon";

describe("PhoneIcon component", () => {
  it("PhoneIcon should render correctly", () => {
    render(<PhoneIcon/>);
  });
});

