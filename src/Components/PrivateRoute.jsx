import React from 'react'
import { checkLogin } from './Auth'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  if(checkLogin()){
    return <Outlet/>;
  }else{
    return <Navigate to="/login" />
  }
}

export default PrivateRoute