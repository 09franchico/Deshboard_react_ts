import React, { ReactNode } from "react"
import * as C from './styles'

type Props ={
    children:ReactNode
    status:boolean
    setStatusModal:React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({children,status,setStatusModal}:Props)=>{

    const handleModalStatus = (e:any)=>{
        if(e.target.classList.contains('modal')){
            setStatusModal(false)
        }
    }
    return(
        <C.Container 
          className="modal"
          status={status} 
          onClick={handleModalStatus}>
           <C.ModelBody>
              {children}
           </C.ModelBody>
        </C.Container>
    )
}