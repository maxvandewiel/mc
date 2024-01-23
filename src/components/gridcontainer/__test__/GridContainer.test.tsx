import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import GridContainer from "../GridContainer";

describe("GridContainer component", () => {
  it("GridContainer should render correctly", () => {
    render(<GridContainer>testing grid container</GridContainer>);
    const container = screen.getByText("testing grid container");
    expect(container).toBeInTheDocument();
  });
});

