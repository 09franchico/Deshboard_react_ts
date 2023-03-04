import { DestBord } from "../../../shared/components/destboard"
import * as C from "./styles"
import { useEffect, useState } from "react"
import { IPessoa, IpessoaData, PessoaService } from "../../../shared/services/pessoa/PessoaService"
import { ApiException } from "../../../shared/services/ApiException"
import { MdCreate, MdDeleteOutline, MdOutlineRemoveRedEye, MdRemoveRedEye } from "react-icons/md"
import { Modal, ModalDelete, Viewdata } from "../../../shared/components/modal"
import { useNavigate } from "react-router-dom"

export const Pessoa = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [statusModalItem, setStatusModalItem] = useState(false)
  const [idPessoa , setIdPessoa] = useState(0)
  const [pessoa, setPessoa] = useState<IpessoaData>()
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
              <td style={{width:"500px"}}>Nome</td>
              <td style={{textAlign:"end",width:"300px"}}>Sobrenome</td>
              <td style={{textAlign:"end"}}>Email</td>
              <td style={{textAlign:"center",width:"120px"}}>Ação</td>
            </tr>
          </thead>
          <tbody>
            {
              pessoa?.data.map((item) => (
                <tr key={item.id}>
                  <td >{item.nome}</td>
                  <td style={{textAlign:"end"}}>{item.sobrenome}</td>
                  <td style={{textAlign:"end"}}>{item.email}</td>
                  <C.Td >
                      <MdDeleteOutline size={25} onClick={() => handleDalete(parseInt(item.id))}/>
                      <MdCreate size={25} onClick={() => navigate(`/pessoa/detalhe/${item.id}`)}/>
                      <MdRemoveRedEye size={25} onClick={()=>handleViewItem(parseInt(item.id))}/>
                  </C.Td>
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
               />
        </Modal>
        <Viewdata 
             slug={statusModalItem} 
             data={pessoaItem} 
             setStatusModalItem={setStatusModalItem}/>
      </C.Container>
    </DestBord >
  )
}