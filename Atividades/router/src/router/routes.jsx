import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Musicas from "../pages/Musicas/index.jsx";
import Filmes from "../pages/Filmes/index.jsx";
import Seriados from "../pages/Seriados/index.jsx";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/musicas",
    element: <Musicas />,
  },

  {
    path: "/filmes",
    element: <Filmes />,
  },
  {
    path: "/seriados",
    element: <Seriados />
  }
  
]);

export default router;