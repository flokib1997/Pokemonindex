import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("processes the props correctly", () => {
    render(<NotFound heading="Heading" explanation="Explanation" />);
    const heading = screen.getByText(/Heading/i);
    const explanation = screen.getByText(/Explanation/i);

    expect(heading).toBeInTheDocument();
    expect(explanation).toBeInTheDocument();
  });
});
