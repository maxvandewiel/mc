import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ColorCircle from "../ColorCircle";

describe("ColorCircle component", () => {
  it("ColorCircle should render correctly", () => {
    render(<ColorCircle>testing color circle</ColorCircle>);
    const container = screen.getByText("testing color circle");
    expect(container).toBeInTheDocument();
  });
});

