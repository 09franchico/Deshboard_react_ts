import { useNavigate } from "react-router-dom"
import * as C from "./styles"

interface IProps{
    ativo?:boolean,
    tipo?:string
}

export const FerramentaListagem = ({ativo,tipo}:IProps)=>{
    const navigate = useNavigate()

    const HandleCreate = ()=>{
         if(tipo =="pessoa"){
            navigate('/pessoa/detalhe/nova')
         }
    }
    return(
        <>
            {ativo &&
                <C.Container ativo={ativo}>
                    <input type="text" placeholder="Pesquisar......" />
                    <button onClick={HandleCreate}>CRIAR</button>
                </C.Container>
            }
        </>
    )
}