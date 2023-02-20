import { useRouteError } from "react-router-dom";
import * as C from './styles'
import { FcHighPriority } from "react-icons/fc";

export const ErrorPage = ()=>{
    const error = useRouteError();
    console.error(error);
  
    return (
      <C.Container>
        <h1>Oops!</h1>
        <p>Pagina não encontrada!</p>
        <FcHighPriority size={100}/>
      </C.Container>
    );
}