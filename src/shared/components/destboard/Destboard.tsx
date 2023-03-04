import * as C from "./styles"
import { ReactNode, useContext, useState } from "react"
import { MenuItem } from "../menu";
import { MdLogout, MdMenu, MdSettings } from "react-icons/md";
import { FerramentaListagem } from "../ferramenta_listagem/FerramentaListagem";
import { MdAccountCircle, MdClear } from "react-icons/md";
import { SiDwm } from "react-icons/si";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

type Props = {
    children: ReactNode;
    ferramentaListagem: boolean
    tipo?: string
}

export const DestBord = ({ children, ferramentaListagem, tipo }: Props) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [stateMenu, setStateMenu] = useState(false);

    //Slug do menu
    const HandleClickIconMenu = () => {
        if (stateMenu == true) {
            setStateMenu(false)
        } else {
            setStateMenu(true)
        }
    }

    const handleSignout = () => {
        auth.signout();
        navigate("/login")

    }

    return (
        <C.Container>
            <C.Menu slug={stateMenu}>
                <C.IconMobile>
                    <MdClear style={{ cursor: "pointer" }} onClick={HandleClickIconMenu} size={30} />
                </C.IconMobile>
                <C.Icon>
                    <SiDwm size={30} display={stateMenu ? "" : "none"} />
                </C.Icon>
                <MenuItem />
                {/* <C.ConfigLogout>
                    <MdSettings size={30}/>
                </C.ConfigLogout> */}
            </C.Menu>
            <C.ContainerBody>
                <C.Header>
                    <MdMenu onClick={HandleClickIconMenu} style={{ cursor: "pointer" }} size={45} />
                    <C.HeaderLogin>
                        <MdAccountCircle size={30} style={{ cursor: "pointer" }} />
                        <h3>
                            {auth.user?.name}
                        </h3>
                        <MdLogout onClick={handleSignout} style={{ cursor: "pointer" }} size={28} />
                    </C.HeaderLogin>
                </C.Header>
                <C.Body>
                    <FerramentaListagem ativo={ferramentaListagem} tipo={tipo} />
                    {children}
                </C.Body>
            </C.ContainerBody>
        </C.Container>

    )
}