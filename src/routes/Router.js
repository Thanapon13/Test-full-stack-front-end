import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HeaderNavbar from "../pages/Header";

const router = createBrowserRouter([
  {
    element: <HeaderNavbar />,
    children: [{ path: "/", element: <HomePage /> }]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
