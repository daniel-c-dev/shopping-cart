import { describe, it, expect } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationLink from "/src/components/NavigationLink.jsx";

describe("Navbar component", () => {
  it("renders home link", () => {
    render(
      <MemoryRouter>
        <NavigationLink path="/" name="Home" />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });

    expect(homeLink).toHaveTextContent("Home");
  });
  it("renders shop link", () => {
    render(
      <MemoryRouter>
        <NavigationLink path="/shop" name="Shop" />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Shop" });

    expect(homeLink).toHaveTextContent("Shop");
  });
});
