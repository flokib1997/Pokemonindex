import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("<ErrorPage />", () => {
  it("renders correctly", () => {
    render(<ErrorPage />);
    const button = screen.getByText(/Back/i);
    const errorText = screen.getByText(/This page does not exist/i);
    expect(button).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });

  it("renders a home button which redirects to the index page", () => {
    render(<ErrorPage />);
    expect(screen.getByText("Back").closest("a")).toHaveAttribute("href", "/");
  });
});
