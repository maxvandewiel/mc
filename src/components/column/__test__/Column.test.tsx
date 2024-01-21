import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Column from "../Column";

describe("Column component", () => {
  it("Row should render correctly", () => {
    render(<Column>testing column</Column>);
    const container = screen.getByText("testing column");
    expect(container).toBeInTheDocument();
  });
});

