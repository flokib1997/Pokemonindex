import React from "react";
import { render, screen } from "@testing-library/react";
import Stat from "./Stat";

describe("<Stat />", () => {
  it("processes the props correctly", () => {
    render(<Stat name="Name" value="Value" />);
    const name = screen.getByText(/Name/i);
    const value = screen.getByText(/Value/i);

    expect(name).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
