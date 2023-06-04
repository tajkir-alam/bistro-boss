import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useAdmin from '../hooks/userAdmin';


const AdminRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loader || isAdminLoading) {
        return (
            <div className='custom-container'>
                <progress className="progress w-96"></progress>
            </div>
        )
    }

    if (user && isAdmin) {
        return children;
    }

    return (
        <Navigate to={'/'} state={{ from: location }} replace ></Navigate>
    );
};

export default AdminRoute;