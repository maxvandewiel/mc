import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Row from "../Row";

describe("Row component", () => {
  it("Row should render correctly", () => {
    render(<Row>testing row</Row>);
    const container = screen.getByText("testing row");
    expect(container).toBeInTheDocument();
  });
});

