import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./Routes/root";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "./components/error_page";
import New_declaration_page from "./Pages/New_declaration_page";
import Dashboard from "./Pages/Dashboard";
import Declaration_detail from "./components/declaration_detail";

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
        element: <New_declaration_page />,
      },
      {
        path: "/details",
        element: <Declaration_detail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
