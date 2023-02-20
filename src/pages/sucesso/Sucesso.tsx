import { useEffect } from "react";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import * as C from "./styles"

export const Sucesso = ()=>{
    const navigate = useNavigate()

    useEffect(()=>{
        const navegateRead = ()=>{
            navigate('/pessoa')
        }
        setTimeout(navegateRead, 2000)
    })
    return(
        <C.Container>
            <FcApproval size={100}/>
            <p>Cadastro Realizado com SUCESSO!</p>
        </C.Container>
    )
}