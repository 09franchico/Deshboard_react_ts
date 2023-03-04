export interface IpessoaData {
    data:IPessoa[]
    message:string
  }
  
  export interface IPessoa {
      id:string
      nome:string,
      sobrenome:string,
      telefone:string
      email:string,
      rua:string,
      bairro:string,
      numero:number,
      complemento:string
      
  }