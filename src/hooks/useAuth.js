import React from 'react';
import { AuthContext } from '../context.js/Auth';

function useAuth() {

    const value = React.useContext(AuthContext);
    
    // console.log(value)
    if (!value) {

        throw new Error("AuthContext's value is undefined.");
    }

    return value;
}

export { useAuth };