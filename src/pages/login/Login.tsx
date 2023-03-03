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
    password:string
}

export const Login = ()=>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = async (data:DataLogin)=>{
        if(data.email && data.password){
            const isLogged = await auth.signin(data.email, data.password);
            if (isLogged) {
                navigate('/pessoa');
            } else {
                alert("Requizição falhou");
            }

        }
    }


    return(
        <C.Container>
            <C.ViewLogin>
                 <FcCdLogo size={40}/>
                 <VformLoginStyle ref={formRef} onSubmit={handleSubmit}>
                    <div>
                     <VformLogin name='email' type="text" label='Email' tamanho={340} /><br />
                     <VformLogin name='password' type="password" label='Senha' tamanho={340} />
                    </div>
                    <C.Button>Entrar</C.Button>
                 </VformLoginStyle>
            </C.ViewLogin>
        </C.Container>
    )

}