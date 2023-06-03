import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <div className='custom-container'>
               <progress className="progress w-96"></progress>
            </div>
        )
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
    }

    return (
        children
    );
};

export default PrivateRoute;