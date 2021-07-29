import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("<ErrorPage />", () => {
  it("renders correctly", () => {
    render(
      <Router>
        <ErrorPage />
      </Router>
    );
    const button = screen.getByText(/Back/i);
    const errorText = screen.getByText(/This page does not exist/i);
    expect(button).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });

  it("renders a home button which redirects to the index page", () => {
    render(
      <Router>
        <ErrorPage />
      </Router>
    );
    expect(screen.getByText("Back").closest("a")).toHaveAttribute("href", "/");
  });
});
