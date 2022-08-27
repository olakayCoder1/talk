import React from 'react';
import { loginWithGoogle } from '../Firebase';

const AuthContext = React.createContext();

const AuthProvider = (props) => {

    const [user, setUser] = React.useState(()=> JSON.parse(localStorage.getItem('authUser'))|| null);

    const login = async () => {
        const user = await loginWithGoogle();

        if (!user) {
            // TODO: Handle failed login
            alert('An error occured try login in again')
        }
 
        setUser(user);
        localStorage.setItem('authUser', JSON.stringify(user))
    };

    const value = { user, login };

    return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };