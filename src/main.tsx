/**
 * Title: main
 * Description:
 * Filename: main.tsx
 * Path: /src/main.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Oct 19, 2023
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, FlightDetails } from "./section/";
import { Root } from "./utils/FlightContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [{ path: "/:id", element: <FlightDetails /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
