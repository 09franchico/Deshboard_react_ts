export interface IUsuario  {
    id:string,
    username:string,
	name: string,
	email: string,
    password:string,
	role: string,
}


export interface IUsuarioData {
    data:IUsuario[]
    message:string
  }