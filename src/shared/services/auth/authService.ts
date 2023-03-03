import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";
import { User } from "../../types/User";


export interface IToken {
   data:string
   message:string
}

export interface ILogout {
  status:boolean
}


const signin = async (email: string, password: string): Promise<IToken | ApiException> => {
try {
  const { data } = await Api().post('/auth/login',{ email, password });
  return data;
} catch (error: any) {
  return new ApiException(error.message || 'Erro ao buscar os registros.');
}
};


const validateToken = async (token:string): Promise<User | ApiException> => {
  try {
    const { data } = await Api().post('/auth/validate',{ token });
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

const logout = async (): Promise<ILogout| ApiException> => {
  try {
    return { status: true };
    const response = await Api().post('/logout');
    //return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

export const authService = {
    validateToken,
    signin,
    logout,
};