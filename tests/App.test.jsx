import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "/src/components/routes.jsx";
import App from "/src/App";

describe("App component", () => {
  it("renders app component", () => {
    const router = createBrowserRouter(routes);

    render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    );

    screen.debug();
  });
});
