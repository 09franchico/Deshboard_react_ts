import { useNavigate } from 'react-router-dom'
import { ApiException } from '../../services/ApiException'
import {  PessoaService } from '../../services/pessoa/PessoaService'
import { UsuarioService } from '../../services/usuario/usuarioService'
import { IpessoaData } from '../../types/Pessoa'
import { IUsuarioData } from '../../types/Usuario'
import * as C from './styles'

type Props = {
    colorItem:string,
    borde?:string,
    hove:string
    value:string
    url?:string
    setStatusModel:React.Dispatch<React.SetStateAction<boolean>>
    idDelete?:number
    setData:React.Dispatch<React.SetStateAction<IUsuarioData>>
}
export const ButtonDestUser = ({colorItem,borde,hove,value,url,setStatusModel,idDelete,setData}:Props)=>{
    const navigate = useNavigate()

    const handleRedirectAction = () =>{

        if(idDelete != undefined && url != undefined){
            UsuarioService.deleteById(idDelete)
            .then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
            } else {
                navigate(url)
                setData(pess => ({
                    ...pess,
                    data: pess.data.filter(pessoa => parseInt(pessoa.id) !== idDelete)
                }));
                setStatusModel(false)
            }
            })
        }

        if(idDelete == undefined && url != undefined){
            navigate(url)
            setStatusModel(false)

        }

    }

    return(
        <C.Button
          colorItem={colorItem}
          borde={borde}
          hove={hove}
          onClick={handleRedirectAction}
        >
            {value}
        </C.Button>
    )
}