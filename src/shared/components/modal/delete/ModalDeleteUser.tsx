import { IpessoaData } from '../../../types/Pessoa'
import { IUsuarioData } from '../../../types/Usuario'
import { ButtonDestUser } from '../../botao/ButtonDestUser'
import * as C from './styles'

type Props = {
    setStatusModel:React.Dispatch<React.SetStateAction<boolean>>
    url?:string
    setData:React.Dispatch<React.SetStateAction<IUsuarioData>>
    idDelete:number
}

export const ModalDeleteUser = ({setStatusModel,url,idDelete,setData}:Props)=>{
    
    return(
        <C.Container>
            <C.Text>
              <p>Realmente deseja deletar?</p>
            </C.Text>
            <C.AreaButton>
                 <ButtonDestUser 
                    colorItem='#1B213B' 
                    borde='#FF4560' 
                    hove='#FF4560' 
                    value='Cancelar'
                    url={url}
                    setData={setData}
                    setStatusModel={setStatusModel}
                    />
                 <ButtonDestUser
                     colorItem='#00E396' 
                     hove='#02b076' 
                     value='Sim'
                     url={url}
                     setStatusModel={setStatusModel}
                     idDelete = {idDelete}
                     setData={setData}
                    />
            </C.AreaButton>
        </C.Container>
    )
}