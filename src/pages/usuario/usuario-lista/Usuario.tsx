import { DestBord } from "../../../shared/components/destboard"
import * as C from "./styles"
import { useEffect, useState } from "react"
import { UsuarioService } from "../../../shared/services/usuario/usuarioService";
import { ApiException } from "../../../shared/services/ApiException";
import { IUsuario, IUsuarioData } from "../../../shared/types/Usuario";
import { MdCreate, MdDeleteOutline, MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Viewdata } from "../../../shared/components/modal";
import { UsuarioView } from "./UsuarioView";

export const Usuario = () => {
  const [statusModalItem, setStatusModalItem] = useState(false)
  const [usuarioItem, setUsuarioItem] = useState<IUsuario>()

  const [usuario, setUsuario] = useState<IUsuarioData>()
  const navigate = useNavigate()

  useEffect(() => {
    UsuarioService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setUsuario(result);
        }
      });
  }, []);

  const handleDalete = (id: number) => {
    console.log("delete")
  }

  const handleViewItem = (id: number) => {
    UsuarioService.getById(Number(id))
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoa');
        } else {
          setStatusModalItem(true)
          setUsuarioItem(result)
        }
      });
  }

  return (
    <DestBord ferramentaListagem={true} tipo="usuario">
      <C.Container>
        <table>
          <thead>
            <tr>
              <td style={{ width: "500px" }}>Username</td>
              <td style={{ textAlign: "end", width: "300px" }}>Nome</td>
              <td style={{ textAlign: "end" }}>Email</td>
              <td style={{ textAlign: "center", width: "120px" }}>Ação</td>
            </tr>
          </thead>
          <tbody>
            {
              usuario?.data.map((item) => (
                <tr key={item.id}>
                  <td >{item.username}</td>
                  <td style={{ textAlign: "end" }}>{item.name}</td>
                  <td style={{ textAlign: "end" }}>{item.email}</td>
                  <C.Td >
                    <MdDeleteOutline size={25} onClick={() => handleDalete(parseInt(item.id))} />
                    <MdCreate size={25} onClick={() => navigate(`/usuario/detalhe/${item.id}`)} />
                    <MdRemoveRedEye size={25} onClick={() => handleViewItem(parseInt(item.id))} />
                  </C.Td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </C.Container>
      <Viewdata
        slug={statusModalItem}
        setStatusModalItem={setStatusModalItem}>
        <UsuarioView data={usuarioItem} />
      </Viewdata>
    </DestBord>
  )
}