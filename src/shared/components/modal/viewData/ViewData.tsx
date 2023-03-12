
import { IPessoa } from "../../../types/Pessoa"
import * as C from "./styles"

type Props = {
   slug:boolean,
   setStatusModalItem:React.Dispatch<React.SetStateAction<boolean>>
   children:React.ReactNode
}

export const Viewdata = ({slug,setStatusModalItem,children}:Props)=>{

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
         {children}
         <C.ConatinerBuuton>
             <C.ButtonVoltar  hove='#FF4560'
                     borde='#FF4560'
                     colorItem='#1B213B'
                     onClick={()=>setStatusModalItem(false)}
                     >Voltar</C.ButtonVoltar>
         </C.ConatinerBuuton>
        </C.ModelBody>
     </C.Container>
  )
}