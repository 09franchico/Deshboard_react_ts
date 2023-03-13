import { useEffect } from "react";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import * as C from "./styles"

type Ppros = {
    msg:string
    url:string
}

export const Sucesso = ({msg,url}:Ppros)=>{
    const navigate = useNavigate()

    useEffect(()=>{
        const navegateRead = ()=>{
            navigate(`/${url}`)
        }
        setTimeout(navegateRead, 2000)
    })
    return(
        <C.Container>
            <FcApproval size={100}/>
            <p>{msg} realizado com SUCESSO!</p>
        </C.Container>
    )
}