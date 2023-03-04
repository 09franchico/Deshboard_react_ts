import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";
import {  IUsuario, IUsuarioData } from "../../types/Usuario";


const getAll = async (): Promise<IUsuarioData | ApiException> => {
  try {
    const { data } = await Api.get('/users');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

const getById = async (id: number): Promise<IUsuario | ApiException> => {
  try {
    const { data } = await Api.get(`/users/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o registro.');
  }
};

const create = async (dataToCreate: Omit<IUsuario, 'id'>): Promise<IUsuario | ApiException> => {
  try {
    const { data } = await Api.post<any>('/users', dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dataToUpdate: IUsuario): Promise<IUsuario | ApiException> => {
  try {
    const { data } = await Api.put(`/users/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<void | ApiException> => {
  try {
    await Api.delete(`/users/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o registro.');
  }
};

export const UsuarioService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};