import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  createBrowserRouter,
  RouterProvider,
  MemoryRouter,
} from "react-router-dom";
import routes from "/src/components/routes.jsx";
import App from "/src/App";

describe("App component", () => {
  it("renders App component", () => {
    const router = createBrowserRouter(routes);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
  });
});
