import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Text from "../Text";

describe("Text component", () => {
  it("Text should render correctly", () => {
    render(<Text/>);
    const container = screen.getByText("These colors are defined in styleguide colors.ts.");
    expect(container).toBeInTheDocument();
  });
});

