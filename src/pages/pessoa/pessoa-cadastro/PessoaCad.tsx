import { FormHandles, SubmitHandler } from '@unform/core'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { DestBord } from '../../../shared/components/destboard'
import { Input, Vform } from '../../../shared/forms/styles'
import { VformPessoa } from '../../../shared/forms/VformPessoa'
import { ApiException } from '../../../shared/services/ApiException'
import { IPessoa, PessoaService } from '../../../shared/services/pessoa/PessoaService'
import * as C from './styles'


export const PessoaCard = () => {
  const navigate = useNavigate()

  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<IPessoa> = data => {
    if (data.nome != '' && data.sobrenome != '') {
      PessoaService.create(data).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          navigate('/pessoa')
          console.log(result)
        }
      });
    } else {
      alert('Valores não pode ser vazio')
    }
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
            <VformPessoa name='endereco.rua' label='Rua' tamanho={500} />
            <span>
              <VformPessoa name='endereco.bairro' label='Bairro' tamanho={100} />
              <VformPessoa name='endereco.numero' label='Numero' tamanho={50} />
            </span>
            <VformPessoa name='endereco.complemento' label='Complemento' tamanho={500} />
          </C.Endereco>
        </Vform>
      </C.Container>
    </DestBord>

  )
}