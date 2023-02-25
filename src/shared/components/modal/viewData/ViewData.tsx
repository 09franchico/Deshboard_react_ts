import { IPessoa } from "../../../services/pessoa/PessoaService"
import * as C from "./styles"

type Props = {
   slug:boolean,
   data:IPessoa | undefined,
   setStatusModalItem:React.Dispatch<React.SetStateAction<boolean>>
}

export const Viewdata = ({slug,data,setStatusModalItem}:Props)=>{

   const handleModalStatus = (e:any)=>{
      if(e.target.classList.contains('modal')){
         setStatusModalItem(false)
      }
  }

  return(
     <C.Container 
          className="modal"
          status={slug}
          onClick={handleModalStatus}
          >
        <C.ModelBody>
           <p>{data?.nome}</p>
           <p>{data?.sobrenome}</p>
        </C.ModelBody>
     </C.Container>
  )
}