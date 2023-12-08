import { useContext,useEffect } from 'react';
import usePersistedState from '../hooks/usePersistedState';
import { isUserStaff } from '../services/userServices';
import {

    Navigate, Outlet,

  } from 'react-router-dom';
import AuthContext from './authContext';

const StaffProtected = ({
    redirectPath = '/',
  }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const [isStaff, setStaff] = usePersistedState('isStaff', false);
  
    useEffect(() => {
      isUserStaff().then((response) => {
        setStaff(response);
      });
    }, [setStaff]);
    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }

    if(!isStaff){
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet/>
  };

export default StaffProtected;
