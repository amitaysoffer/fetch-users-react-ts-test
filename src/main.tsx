import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import UserList from "./Users/UserList/UserList.tsx";
import { UsersProvider } from "./context/UsersContext.tsx";
import UserDetails from "./Users/UserDetails/UserDetails.tsx";
import ErrorPage from "./ErrorPage.tsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UserList />,
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  </React.StrictMode>
);
