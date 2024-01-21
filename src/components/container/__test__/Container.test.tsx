import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "../Container";

describe("Container component", () => {
  it("Container should render correctly", () => {
    render(<Container>testing container</Container>);
    const container = screen.getByText("testing container");
    expect(container).toBeInTheDocument();
  });
});

