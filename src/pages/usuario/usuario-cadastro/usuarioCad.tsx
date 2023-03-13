import { useNavigate, useParams } from 'react-router-dom';
import { DestBord } from '../../../shared/components/destboard'
import { useRef, useState, useEffect } from 'react'
import * as C from './styles'
import { UsuarioService } from '../../../shared/services/usuario/usuarioService';
import { FormHandles } from '@unform/core';
import { IUsuario } from '../../../shared/types/Usuario';
import { FormUsuario } from '../../../shared/forms/styles';
import { VformUsuario } from '../../../shared/forms/VformUsuario';
import { ApiException } from '../../../shared/services/ApiException';
import { Modal } from '../../../shared/components/modal';
import { Sucesso } from '../../sucesso';

export const UsuarioCad = () => {
  const { id = 'nova' } = useParams<'id'>();
  const formRef = useRef<FormHandles>(null)
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState<IUsuario>()
  const [modalStatus, setModalStatus] = useState(false)
  const [sucessoModal,setSucessoModal] = useState(false)
  const [messageModal,setMessageModal] = useState('')

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
        username: '',
        name: '',
        email: '',
        password:'',
        roles: '',
      });
    }
  }, [id]);


  const handleSubmit = (data: IUsuario) => {
    if (id === 'nova') {
      if (data.name != '' && data.email != '') {
        UsuarioService
          .create(data)
          .then((result) => {
            if (result instanceof ApiException) {
              alert(result.message);
            } else {
              setMessageModal('Cadastro')
              setSucessoModal(true)
              setModalStatus(true)
            }
          });
      } else {
        alert('Valores não pode ser vazio')
      }

    } else {
      //Update de pessoa
      UsuarioService
        .updateById(Number(id), data)
        .then((result) => {
          if (result instanceof ApiException) {
            alert(result.message);
          } else {
              setMessageModal('Update')
              setSucessoModal(true)
              setModalStatus(true)
            }
        });
    }
  }

  //Cancelar cadastro
  const handleCancel = (e:any)=>{
    e.preventDefault();
    setModalStatus(true)

  }

  //sair 
  const handleExit = ()=>{
    navigate('/usuario')
   
}

  return (
    <DestBord ferramentaListagem={false}>
      <C.Container>
        <FormUsuario ref={formRef} onSubmit={handleSubmit}>
          <VformUsuario name='username' tamanho={500} placeholder="Digite seu nome" label='Nome' />
          <VformUsuario name='name' tamanho={500} placeholder="Digite seu nome" label='Sobrenome' />
          <VformUsuario name='email' type='email' tamanho={500} placeholder="Digite seu nome" label='Email' />
          <VformUsuario name='password' type='password' tamanho={500} placeholder="Digite sua senha" label='Password' />
          <VformUsuario name='roles' tamanho={500} placeholder="Digite seu nome" label='Roles' />
          <C.ConatinerButton>
            <C.ButtonSave
              hove='#FF4560'
              borde='#FF4560'
              onClick={handleCancel} 
              colorItem='#1B213B'>Cancelar
            </C.ButtonSave>
            <C.ButtonSave
              hove='#0cbe82'
              colorItem='#00E396'>Salvar
            </C.ButtonSave>
          </C.ConatinerButton>
        </FormUsuario>
        <Modal status={modalStatus} setStatusModal={setModalStatus}>
          {sucessoModal
            ? <Sucesso url="usuario" msg={messageModal} />
            : <div>
              <p>Deseja cancelar o cadastro ?</p><C.ButtonSave
                hove='#FF4560'
                onClick={handleExit}
                borde='#FF4560'
                colorItem='#1B213B'>Sair</C.ButtonSave>
            </div>
          }
        </Modal>
      </C.Container>
    </DestBord>
  )
}