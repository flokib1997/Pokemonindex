import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonInformation from "./PokemonInformation";

describe("PokemonInformation />", () => {
  it("processes the props correctly", () => {
    render(<PokemonInformation name="Name" value="Value" />);
    const name = screen.getByText(/Name/i);
    const value = screen.getByText(/Value/i);

    expect(name).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
