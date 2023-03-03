import { createContext } from 'react';
import { IToken } from '../../services/auth/authService';
import { User } from '../../types/User';

export type AuthContextType = {
    user: IToken | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);