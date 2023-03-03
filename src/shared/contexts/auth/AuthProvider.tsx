import { useEffect, useState } from "react";
import { authService, IToken } from "../../services/auth/authService";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IToken | null>(null);

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await authService.validateToken(storageData);
                if (data instanceof Error) {
                    return data.message;
                  } else {
                     setUser(data);
                    
                  }
            }
        }
        validateToken();
    }, []);

    const signin = async (email: string, password: string) => {
        const data = await authService.signin(email, password);
        if (data instanceof Error) {
            return false
          } else {
            setToken(data.token);
            return true;
            
          }
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await authService.logout();
    }

    //Seta o token no localStore
    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}