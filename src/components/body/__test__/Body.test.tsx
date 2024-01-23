import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Body from "../Body";

describe("Body component", () => {
  it("Body should render correctly", () => {
    render(<Body>testing body</Body>);
    const container = screen.getByText("testing body");
    expect(container).toBeInTheDocument();
  });
});

