import React, { createContext, useState  } from 'react';
import { API } from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    setUser: (user: AuthContextData) => {} | void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [email,setEmail] = useState<string | null>(null)
    const [password,setPassword] = useState<string | null>(null)
    const [user, setUser] = useState<object | null>(null)

    return (
        <AuthContext.Provider value={{signed: !!user, user, setUser}}>
            {children}
        </AuthContext.Provider>
        
    )
    
};

export default AuthContext;