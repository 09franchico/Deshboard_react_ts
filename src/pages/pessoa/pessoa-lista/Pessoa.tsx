import { DestBord } from "../../../shared/components/destboard"
import * as C from "./styles"
import { useEffect, useState } from "react"
import { IPessoa, PessoaService } from "../../../shared/services/pessoa/PessoaService"
import { ApiException } from "../../../shared/services/ApiException"
import { MdCreate, MdDeleteOutline } from "react-icons/md"
import { Modal, ModalDelete } from "../../../shared/components/modal"

export const Pessoa = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [idPessoa , setIdPessoa] = useState(0)
  const [pessoa, setPessoa] = useState<IPessoa[]>([])
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    PessoaService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setPessoa(result);
        }
      });
      setLoading(false)
  }, []);

  
  //Delete Pessoa
  const handleDalete = (id:number) =>{
    setIdPessoa(id)
    setModalStatus(true)

  }
  
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
                  <C.Td onClick={() => handleDalete(parseInt(item.id))}><MdDeleteOutline size={25}/></C.Td>
                  <C.Td><MdCreate size={25}/></C.Td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Modal status={modalStatus} setStatusModal={setModalStatus}>
           <ModalDelete 
               url="/pessoa"
               idDelete ={idPessoa} 
               setStatusModel={setModalStatus}
               setData={setPessoa}/>
        </Modal>
      </C.Container>
    </DestBord >
  )
}