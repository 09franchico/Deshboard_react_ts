import * as C from "./styles"
import {ReactNode, useState} from "react"
import { MenuItem } from "../menu";
import { MdMenu,MdSettings} from "react-icons/md";
import { FerramentaListagem } from "../ferramenta_listagem/FerramentaListagem";
import { MdAccountCircle,MdClear } from "react-icons/md";
import { SiDwm } from "react-icons/si";

type Props = {
    children: ReactNode;
    ferramentaListagem:boolean
    tipo?:string
}

export const DestBord = ({children,ferramentaListagem,tipo}:Props)=>{
    const [stateMenu, setStateMenu] = useState(false);

    //Slug do menu
    const HandleClickIconMenu = ()=>{
        if(stateMenu == true){
            setStateMenu(false)
        }else{
            setStateMenu(true)
        }
    }

    return(
        <C.Container>
            <C.Menu slug ={stateMenu}>
                 <C.IconMobile>
                     <MdClear style={{cursor:"pointer"}} onClick={HandleClickIconMenu} size={30}/>
                </C.IconMobile>
                <C.Icon>
                    <SiDwm size={30} display={stateMenu ? "":"none"}/>
                </C.Icon>
                <MenuItem/>
                {/* <C.ConfigLogout>
                    <MdSettings size={30}/>
                </C.ConfigLogout> */}
            </C.Menu>
            <C.ContainerBody>
                <C.Header>
                    <MdMenu onClick={HandleClickIconMenu} style={{cursor:"pointer"}} size={45}/>
                    <C.HeaderLogin>
                        <MdAccountCircle size={30}/>
                    </C.HeaderLogin>
                </C.Header>
                <C.Body>
                     <FerramentaListagem ativo={ferramentaListagem} tipo={tipo}/>
                    {children}
                </C.Body>
            </C.ContainerBody>
        </C.Container>

    )
}