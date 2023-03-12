import { IUsuario } from "../../../shared/types/Usuario"
import * as C from "./styles"

type Props = {
    data:IUsuario | undefined
}

export const UsuarioView:React.FC<Props> = ({data})=>{

    return(
        <C.ContainerView>
            <div>
            <C.Span>
               <h2>Email:</h2>
               <p>{data?.email}</p>
            </C.Span>
         </div>
         <div>
            <C.Span>
               <h2>Nome:</h2>
               <p>{data?.name}</p>
            </C.Span>
            <C.Span>
               <h2>Sobrenome:</h2>
               <p>{data?.username}</p>
            </C.Span>
            <C.Span>
               <h2>Função:</h2>
               <p>{data?.role}</p>
            </C.Span>
         </div>
        </C.ContainerView>
    )
}