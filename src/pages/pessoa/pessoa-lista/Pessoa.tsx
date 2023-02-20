import { DestBord } from "../../../shared/components/destboard"
import * as C from "./styles"
import { useEffect, useState } from "react"
import { IPessoa, PessoaService } from "../../../shared/services/pessoa/PessoaService"
import { ApiException } from "../../../shared/services/ApiException"
import { MdCreate, MdDeleteOutline } from "react-icons/md"

export const Pessoa = () => {
  const [pessoa, setPessoa] = useState<IPessoa[]>()
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    
    PessoaService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setPessoa(result);
          console.log(result)
        }
      });
      setLoading(false)
  }, []);
  
  return (
    <DestBord ferramentaListagem={true} tipo='pessoa'>
      <C.Container>
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Sobrenome</td>
              <td>Email</td>
              <td>Rua</td>
              <td>Bairro</td>
              <td>Numero</td>
              <td>Complemento</td>
              <td>Ação</td>
            </tr>
          </thead>
          <tbody>
            {
              pessoa?.map((item) => (
                <tr key={item.id}>
                  <td >{item.nome}</td>
                  <td >{item.sobrenome}</td>
                  <td >{item.email}</td>
                  <td >{item.endereco.rua}</td>
                  <td >{item.endereco.bairro}</td>
                  <td >{item.endereco.numero}</td>
                  <td >{item.endereco.complemento}</td>
                  <td><MdDeleteOutline size={25}/></td>
                  <td><MdCreate size={25}/></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </C.Container>
    </DestBord >
  )
}