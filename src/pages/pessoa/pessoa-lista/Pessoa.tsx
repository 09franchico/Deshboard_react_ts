import { DestBord } from "../../../shared/components/destboard"
import * as C from "./styles"
import { useEffect, useState } from "react"
import { IPessoa, PessoaService } from "../../../shared/services/pessoa/PessoaService"
import { ApiException } from "../../../shared/services/ApiException"
import { MdCreate, MdDeleteOutline,MdOutlinePersonalVideo } from "react-icons/md"
import { Modal, ModalDelete, Viewdata } from "../../../shared/components/modal"
import { useNavigate } from "react-router-dom"

export const Pessoa = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [statusModalItem, setStatusModalItem] = useState(false)
  const [idPessoa , setIdPessoa] = useState(0)
  const [pessoa, setPessoa] = useState<IPessoa[]>([])
  const [pessoaItem, setPessoaItem] = useState<IPessoa>()
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate()

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

  const handleViewItem = (id:number) =>{
    PessoaService.getById(Number(id))
        .then((result) => {
          if (result instanceof Error) {
            alert(result.message);
            navigate('/pessoa');
          } else {
             setStatusModalItem(true)
             setPessoaItem(result)
            
          }
        });

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
                  <C.Td onClick={() => handleDalete(parseInt(item.id))}><MdDeleteOutline size={20}/></C.Td>
                  <C.Td><MdCreate size={20} onClick={() => navigate(`/pessoa/detalhe/${item.id}`)}/></C.Td>
                  <C.Td><MdOutlinePersonalVideo size={20} onClick={()=>handleViewItem(parseInt(item.id))}/></C.Td>
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
        <Viewdata 
             slug={statusModalItem} 
             data={pessoaItem} 
             setStatusModalItem={setStatusModalItem}/>
      </C.Container>
    </DestBord >
  )
}