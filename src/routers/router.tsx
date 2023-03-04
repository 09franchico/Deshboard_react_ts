
import {createBrowserRouter,} from "react-router-dom";
import { Grafico } from "../pages/grafico";
import { Login } from "../pages/login";
import { Pessoa, PessoaCard } from "../pages/pessoa";
import { Sucesso } from "../pages/sucesso";
import { Usuario, UsuarioCad } from "../pages/usuario";
import { RequireAuth } from "../shared/contexts/auth/RequireAuth";
import { ErrorPage } from "./error/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element:<RequireAuth><Grafico/></RequireAuth>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/pessoa",
    element:<RequireAuth><Pessoa/></RequireAuth>
  },
  {
    path:"/pessoa/detalhe/:id",
    element:<RequireAuth><PessoaCard/></RequireAuth>
  },
  {
    path:"/usuario",
    element:<RequireAuth><Usuario/></RequireAuth>
  },
  {
    path:"/usuario/detalhe/:id",
    element:<RequireAuth><UsuarioCad/></RequireAuth>
  },
]);