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
         <div>
            <C.Span>
               <h2>Email:</h2>
               <p>{data?.email}</p>
            </C.Span>
        </div>
         <div>
              <C.Span>
                  <h2>Nome:</h2>
                  <p>{data?.nome}</p>
               </C.Span>
               <C.Span>
                  <h2>Sobrenome:</h2>
                  <p>{data?.sobrenome}</p>
               </C.Span>
         </div>
         <div>
              <C.Span>
                  <h2>Bairro:</h2>
                  <p>{data?.endereco.bairro?data?.endereco.bairro:"------------"}</p>
               </C.Span>
               <C.Span>
                  <h2>Rua:</h2>
                  <p>{data?.endereco.rua}</p>
               </C.Span>
               <C.Span>
                  <h2>Complemento:</h2>
                  <p>{data?.endereco.complemento?data?.endereco.complemento:"-------------------" }</p>
               </C.Span>
         </div>
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