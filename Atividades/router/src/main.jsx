import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ReactDOM } from "react";
import router from "./router/routes";
import "./index.css";
import { GlobalContextProvider } from "./contexts/GlobalContext";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </GlobalContextProvider>
);
