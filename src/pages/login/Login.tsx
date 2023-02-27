import * as C from './styles'
import onda from "../../assets/onda.svg"
import { Vform,VformLoginStyle } from '../../shared/forms/styles'
import { FormHandles } from '@unform/core'
import { useRef,useContext } from 'react'
import { VformLogin } from '../../shared/forms/VformeLogin'
import { FcCdLogo} from "react-icons/fc";
import { AuthContext } from '../../shared/contexts/auth/AuthContext'
import { useNavigate } from 'react-router-dom'

type DataLogin = {
    email:string,
    senha:string
}

export const Login = ()=>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = async (data:DataLogin)=>{
        if(data.email && data.senha){
            const isLogged = await auth.signin(data.senha, data.senha);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.");
            }

        }
    }


    return(
        <C.Container>
            <C.ViewLogin>
                 <FcCdLogo size={40}/>
                 <VformLoginStyle ref={formRef} onSubmit={handleSubmit}>
                    <div>
                     <VformLogin name='email' type="email" label='Email' tamanho={340} /><br />
                     <VformLogin name='senha' type="password" label='Senha' tamanho={340} />
                    </div>
                    <C.Button>Entrar</C.Button>
                 </VformLoginStyle>
            </C.ViewLogin>
        </C.Container>
    )

}