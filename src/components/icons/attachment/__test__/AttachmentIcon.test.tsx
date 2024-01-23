import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AttachmentIcon from "../AttachmentIcon";

describe("AttachmentIcon component", () => {
  it("AttachmentIcon should render correctly", () => {
    render(<AttachmentIcon/>);
  });
});

