// Imports: 

import React, {useContext} from 'react';
import { useLocation } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from "./App";

// Hook Rotas Protegidas: 

const useAuth = () => {

    const { user } = useContext(UserContext);
    return user && user.loggedIn;

};

const Protected = () => {
    
    const location = useLocation();
    const isAuth = useAuth();


    // Caso o Usuário esteja Logado Mostre Outlet, Se não, mostre Login
    return isAuth ? (
        <Outlet/>

        ) : (

        <Navigate to="/" replace state={{ from: location }}/>
        ); 

    // Jeito 2:

    //  return isAuth? <Outlet/> : <Login/>; 
}

export default Protected;