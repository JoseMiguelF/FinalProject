
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  
  const log = useSelector( state => state.log )
    
      if (log) {
        return <Outlet/>
      }else{
        <Navigate to='/' />
      }
   
};

export default ProtectedRoutes;