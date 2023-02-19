import { FormHandles, SubmitHandler } from '@unform/core'
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { DestBord } from '../../../shared/components/destboard'
import { Input, Vform } from '../../../shared/forms/styles'
import { VformPessoa } from '../../../shared/forms/VformPessoa'
import { ApiException } from '../../../shared/services/ApiException'
import { IPessoa, PessoaService } from '../../../shared/services/pessoa/PessoaService'
import * as C from './styles'


export const PessoaCard = ()=>{
  const navigate = useNavigate()

  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<IPessoa> = data => {
    if(data.nome != '' && data.sobrenome != ''){
      PessoaService.create(data).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          navigate('/pessoa')
          console.log(result)
        }
      });
    }else{
      alert('Valores não pode ser vazio')
    }
  }

    return(
      <DestBord ferramentaListagem={false} >
          <C.Container>
             <Vform ref={formRef} onSubmit={handleSubmit}>
               <VformPessoa name='nome' label='Nome'/>
               <VformPessoa name='sobrenome' label='Sobrenome'/>
               <VformPessoa name='email' label='Email'/>
               <VformPessoa name='endereco.rua' label='Rua'/>
               <VformPessoa name='endereco.bairro' label='Bairro'/>
               <VformPessoa name='endereco.numero' label='Numero'/>
               <VformPessoa name='endereco.complemento' label='Complemento'/>
               <button>SALVAR</button>
             </Vform>
          </C.Container>
      </DestBord>

    )
}