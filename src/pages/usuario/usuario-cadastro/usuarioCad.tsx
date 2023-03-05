import { useNavigate, useParams } from 'react-router-dom';
import { DestBord } from '../../../shared/components/destboard'
import { useRef, useState,useEffect } from 'react'
import * as C from './styles'
import { UsuarioService } from '../../../shared/services/usuario/usuarioService';
import { FormHandles } from '@unform/core';
import { IUsuario } from '../../../shared/types/Usuario';

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


    return (
        <DestBord ferramentaListagem={false}>
            <C.Container>
                <h1>
                  {usuario?.email}
                </h1>
            </C.Container>
        </DestBord>
    )
}