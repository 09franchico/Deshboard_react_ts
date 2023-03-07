import { useNavigate, useParams } from 'react-router-dom';
import { DestBord } from '../../../shared/components/destboard'
import { useRef, useState,useEffect } from 'react'
import * as C from './styles'
import { UsuarioService } from '../../../shared/services/usuario/usuarioService';
import { FormHandles } from '@unform/core';
import { IUsuario } from '../../../shared/types/Usuario';
import { FormUsuario } from '../../../shared/forms/styles';
import { VformUsuario } from '../../../shared/forms/VformUsuario';

export const UsuarioCad = () => {
    const { id = 'nova' } = useParams<'id'>();
    const formRef = useRef<FormHandles>(null)
    const navigate = useNavigate()
    const [usuario,setUsuario] = useState<IUsuario>()

    useEffect(() => {
        if (id !== 'nova') {
          UsuarioService.getById(Number(id))
            .then((result) => {
              if (result instanceof Error) {
                alert(result.message);
                navigate('/usuario');
              } else {
                formRef.current?.setData(result);
                setUsuario(result)
                console.log(usuario)
              }
            });
        } else {
          formRef.current?.setData({
            username:'',
            name:'',
            email:'',
            roles:'',
          });
        }
      }, [id]);


      const handleSubmit = (data:IUsuario)=>{
        console.log(data)
      }
    
    return (
        <DestBord ferramentaListagem={false}>
            <C.Container>
                <FormUsuario ref={formRef} onSubmit={handleSubmit}>
                     <VformUsuario name='username' tamanho={500} placeholder="Digite seu nome" label='nome'/>
                     <VformUsuario name='name' tamanho={500} placeholder="Digite seu nome" label='sobrenome'/>
                     <VformUsuario name='email' type='email' tamanho={500} placeholder="Digite seu nome" label='email'/>
                     <VformUsuario name='roles' tamanho={300} placeholder="Digite seu nome" label='roles'/>
                     <button>SALVAR</button>
                </FormUsuario>
            </C.Container>
        </DestBord>
    )
}