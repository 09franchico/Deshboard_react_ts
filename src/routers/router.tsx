
import {createBrowserRouter,} from "react-router-dom";
import { Grafico } from "../pages/grafico";
import { Pessoa, PessoaCard } from "../pages/pessoa";
import { ErrorPage } from "./error/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Grafico/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/pessoa",
    element:<Pessoa/>
  },
  {
    path:"/pessoa/cad",
    element:<PessoaCard/>

  }
]);