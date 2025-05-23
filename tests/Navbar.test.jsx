import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  createBrowserRouter,
  RouterProvider,
  MemoryRouter,
} from "react-router-dom";
import routes from "/src/components/routes.jsx";
import Navbar from "/src/components/Navbar.jsx";

const router = createBrowserRouter(routes);

describe("Navbar component", () => {
  it("navigates to home", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    fireEvent.click(homeLink);

    // Assert that the location changes to the expected path
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
  it("navigates to shop", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RouterProvider router={router}>
          <Navbar />
        </RouterProvider>
      </MemoryRouter>
    );

    const shopLink = screen.getByRole("link", { name: "Shop" });
    fireEvent.click(shopLink);

    // Assert that the location changes to the expected path
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });
});
