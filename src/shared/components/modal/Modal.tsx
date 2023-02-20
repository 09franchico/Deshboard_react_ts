import React, { ReactNode } from "react"
import * as C from './styles'

type Props ={
    children:ReactNode
    status:boolean
    setStatusModal:React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({children,status,setStatusModal}:Props)=>{

    const handleModalStatus:React.MouseEventHandler<HTMLDivElement> = (e)=>{
        if(e.currentTarget.classList.contains('modal')){
            console.log(e.target)
            setStatusModal(false)
        }
    }
    return(
        <C.Container className="modal"
          status={status} 
          onClick={handleModalStatus}>
           <C.ModelBody>
              {children}
           </C.ModelBody>
        </C.Container>
    )
}