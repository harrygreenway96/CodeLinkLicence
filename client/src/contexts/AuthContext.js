import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    // Here we will eventually connect to API or localstorage to check
    // logged in state but for now use a state to simulate this

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return(
        <AuthContext.Provider value={{ isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);