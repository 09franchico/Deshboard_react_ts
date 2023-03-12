import { IPessoa } from "../../../shared/types/Pessoa"
import * as C from "./styles"

type Props = {
   data: IPessoa | undefined,
}

export const PessoaView = ({ data }: Props) => {
   return (
      <C.Model>
         <div>
            <C.Span>
               <h2>Email:</h2>
               <p>{data?.email}</p>
            </C.Span>
         </div>
         <div>
            <C.Span>
               <h2>Nome:</h2>
               <p>{data?.nome}</p>
            </C.Span>
            <C.Span>
               <h2>Sobrenome:</h2>
               <p>{data?.sobrenome}</p>
            </C.Span>
         </div>
         <div>
            <C.Span>
               <h2>Bairro:</h2>
               <p>{data?.bairro ? data?.bairro : "------------"}</p>
            </C.Span>
            <C.Span>
               <h2>Rua:</h2>
               <p>{data?.rua}</p>
            </C.Span>
            <C.Span>
               <h2>Complemento:</h2>
               <p>{data?.complemento ? data?.complemento : "-------------------"}</p>
            </C.Span>
         </div>
      </C.Model>

   )
}