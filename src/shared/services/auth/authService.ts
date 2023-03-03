import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";


export interface IToken {
   token:string
}

export interface ILogout {
  status:boolean
}


const signin = async (username: string, password: string): Promise<IToken | ApiException> => {
try {
  const { data } = await Api().post('/auth',{ username, password });
  return data;
} catch (error: any) {
  return new ApiException(error.message || 'Erro ao buscar os registros.');
}
};


const validateToken = async (token:string): Promise<IToken | ApiException> => {
  try {
    const { data } = await Api().post('/activate',{ token });
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