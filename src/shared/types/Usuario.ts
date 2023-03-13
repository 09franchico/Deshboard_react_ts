export interface IUsuario  {
    id:string,
    username:string,
    password:string
	name: string,
	email: string,
	role: string,
}


export interface IUsuarioData {
    data:IUsuario[]
    message:string
  }