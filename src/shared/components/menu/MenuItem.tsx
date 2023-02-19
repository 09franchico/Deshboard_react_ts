import {  useNavigate } from "react-router-dom";
import * as C from "./styles"
import { MdHome,MdSupervisorAccount,MdPostAdd,MdQueryStats,MdMapsHomeWork } from "react-icons/md";

export const MenuItem = ()=>{
    const navigate = useNavigate()
   
    const HandleClick = ()=>{
        navigate("/pessoa")
        
    }

    const HandleClickHome = ()=>{
        navigate("/")
        
    }

    return(
        <C.Container>
            <C.Menu>
                <C.MenuIcon onClick={HandleClickHome}>
                    <MdHome size={25}/>
                    <p>Destbord</p>
                </C.MenuIcon>
                <C.MenuIcon onClick={HandleClick}>
                    <MdSupervisorAccount size={25}/>
                    <p>Pessoa</p>
                </C.MenuIcon>
                <C.MenuIcon >
                    <MdPostAdd size={25}/>
                    <p>Produto</p>
                </C.MenuIcon>
                <C.MenuIcon >
                    <MdQueryStats size={25}/>
                    <p>Vendas</p>
                </C.MenuIcon>
                <C.MenuIcon >
                    <MdMapsHomeWork size={25}/>
                    <p>Fornecedor</p>
                </C.MenuIcon>
            </C.Menu>
        </C.Container>

    )
}