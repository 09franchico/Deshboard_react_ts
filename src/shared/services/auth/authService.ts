import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";


const validateToken = async (token:string) => {
  try {
    return {
        user: { id: 3, name: 'José', email: 'jose@gmail.com' }
    };
    const response = await Api().post('/validate', { token });
    return response.data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

const signin = async (email: string, password: string) => {
  try {
    return {
        user: { id: 3, name: 'José', email: 'jose@gmail.com' },
        token: '123456789'
    };
    const response = await Api().post('/signin', { email, password });
    return response.data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o registro.');
  }
};

const logout = async () => {
  try {
    return { status: true };
    const response = await Api().post('/logout');
    return response.data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar o registro.');
  }
};


export const authService = {
    validateToken,
    signin,
    logout,
};