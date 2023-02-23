
import {createBrowserRouter,} from "react-router-dom";
import { Grafico } from "../pages/grafico";
import { Pessoa, PessoaCard } from "../pages/pessoa";
import { Sucesso } from "../pages/sucesso";
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
    path:"/pessoa/detalhe/:id",
    element:<PessoaCard/>
  },
  {
    path:"/sucesso",
    element:<Sucesso/>
  }
]);