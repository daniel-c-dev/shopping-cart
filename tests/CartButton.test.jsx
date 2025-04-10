import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CartButton from "../src/components/CartButton.jsx";

describe("Cart component", () => {
  it("renders cart button", () => {
    render(
      <MemoryRouter>
        <CartButton itemCount={1} />
      </MemoryRouter>
    );

    const cartButton = screen.getByRole("img");
    expect(cartButton).toBeInTheDocument();
  });

  it("renders item count of 0", () => {
    const itemCount = 0;
    render(
      <MemoryRouter>
        <CartButton itemCount={itemCount} />
      </MemoryRouter>
    );

    const cartButton = screen.getByText(itemCount);
    expect(cartButton).toBeInTheDocument();
  });

  it("renders item count of 5", () => {
    const itemCount = 5;
    render(
      <MemoryRouter>
        <CartButton itemCount={itemCount} />
      </MemoryRouter>
    );

    const cartButton = screen.getByText(itemCount);
    expect(cartButton).toBeInTheDocument();
  });

  it("renders item count of 99", () => {
    const itemCount = 99;
    render(
      <MemoryRouter>
        <CartButton itemCount={itemCount} />
      </MemoryRouter>
    );

    const cartButton = screen.getByText(itemCount);
    expect(cartButton).toBeInTheDocument();
  });
});
