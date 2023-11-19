import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home";

test("renders homepage text", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const homeText = screen.getByText(/Do you know your Personal Trait?/i);
  expect(homeText).toBeInTheDocument();
});