import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";

export interface IPessoa {
    id:string
    nome:string,
    sobrenome:string,
    telefone:string
    email:string,
    endereco:{
        rua:string,
        bairro:string,
        numero:number,
        complemento:string
    }
}


const getAll = async (): Promise<IPessoa[] | ApiException> => {
  try {
    const { data } = await Api().get('/pessoas');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

const getById = async (id: number): Promise<IPessoa | ApiException> => {
  try {
    const { data } = await Api().get(`/pessoas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o registro.');
  }
};

const create = async (dataToCreate: Omit<IPessoa, 'id'>): Promise<IPessoa | ApiException> => {
  try {
    const { data } = await Api().post<any>('/pessoas', dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dataToUpdate: IPessoa): Promise<IPessoa | ApiException> => {
  try {
    const { data } = await Api().put(`/pessoas/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<void | ApiException> => {
  try {
    await Api().delete(`/pessoas/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o registro.');
  }
};

export const PessoaService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};