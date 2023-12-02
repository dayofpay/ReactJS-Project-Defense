import { useContext } from 'react';
import {

    Navigate, Outlet,

  } from 'react-router-dom';
import AuthContext from './authContext';

const ProtectedRoute = ({
    redirectPath = '/login',
  }) => {
    const {isAuthenticated} = useContext(AuthContext);
    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }

    return <Outlet/>
  };

export default ProtectedRoute