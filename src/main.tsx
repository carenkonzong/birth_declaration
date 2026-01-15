import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "./Pages/error pages/Error_page";
import Dashboard from "./Pages/Dashboard";
import DeclarationDetail from "./Pages/DeclarationDetail";
import NewDeclarationPage from "./Pages/NewDeclarationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "/new_declaration",
        element: <NewDeclarationPage />,
      },
      {
        path: "/details/:id",
        element: <DeclarationDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
