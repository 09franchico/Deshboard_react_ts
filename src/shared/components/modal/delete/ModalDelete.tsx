import { IPessoa, IpessoaData } from '../../../services/pessoa/PessoaService'
import { ButtonDest } from '../../botao'
import * as C from './styles'

type Props = {
    setStatusModel:React.Dispatch<React.SetStateAction<boolean>>
    url?:string
    setData?:React.Dispatch<React.SetStateAction<IpessoaData>>
    idDelete:number
}

export const ModalDelete = ({setStatusModel,url,idDelete,setData}:Props)=>{
    
    return(
        <C.Container>
            <C.Text>
              <p>Realmente deseja deletar?</p>
            </C.Text>
            <C.AreaButton>
                 <ButtonDest 
                    colorItem='#1B213B' 
                    borde='#FF4560' 
                    hove='#FF4560' 
                    value='Cancelar'
                    url={url}
                    setData={setData}
                    setStatusModel={setStatusModel}
                    />
                 <ButtonDest 
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