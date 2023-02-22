import { FormHandles, SubmitHandler } from '@unform/core'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DestBord } from '../../../shared/components/destboard'
import { Modal } from '../../../shared/components/modal'
import { Input, Vform } from '../../../shared/forms/styles'
import { VformPessoa } from '../../../shared/forms/VformPessoa'
import { ApiException } from '../../../shared/services/ApiException'
import { IPessoa, PessoaService } from '../../../shared/services/pessoa/PessoaService'
import { Sucesso } from '../../sucesso'
import * as C from './styles'


export const PessoaCard = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [sucessoModal,setSucessoModal] = useState(false)
  const navigate = useNavigate()

  const formRef = useRef<FormHandles>(null)

  //Submit do formulario
  const handleSubmit: SubmitHandler<IPessoa> = data => {
    if (data.nome != '' && data.sobrenome != '') {
      PessoaService.create(data).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setSucessoModal(true)
          setModalStatus(true)
        }
      });
    } else {
      alert('Valores não pode ser vazio')
    }
  }
  
  //Cancelar cadastro
  const handleCancel = (e:any)=>{
      e.preventDefault();
      setModalStatus(true)

  }

  //sair 
  const handleExit = ()=>{
      navigate('/pessoa')
     
  }

  return (
    <DestBord ferramentaListagem={false} >
      <C.Container>
        <Vform ref={formRef} onSubmit={handleSubmit}>
          <C.Pessoa>
            <VformPessoa name='nome' label='Nome' tamanho={500} />
            <VformPessoa name='sobrenome' label='Sobrenome' tamanho={500} />
            <VformPessoa name='email' label='Email' tamanho={500} />
          </C.Pessoa>
          <C.Endereco>
            <span>Endereço Residencial:</span>
            <div>
                <VformPessoa name='endereco.rua' label='Rua' tamanho={500} />
                <VformPessoa name='endereco.numero' label='Numero' tamanho={100} />
            </div>
            <div>
              <VformPessoa name='endereco.bairro' label='Bairro' tamanho={200} />
              <VformPessoa name='endereco.complemento' label='Complemento' tamanho={400} />
            </div>
            <C.ConatinerButton>
                <C.ButtonSave 
                     hove='#FF4560' 
                     onClick={handleCancel} 
                     borde='#FF4560'
                     colorItem='#1B213B'>Cancelar</C.ButtonSave>
                <C.ButtonSave 
                     hove='#0cbe82' 
                     colorItem='#00E396'>Salvar</C.ButtonSave>
            </C.ConatinerButton>
          </C.Endereco>
        </Vform>
        <Modal status={modalStatus} setStatusModal={setModalStatus}>
          {sucessoModal 
             ? <Sucesso/>
             :<div>
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