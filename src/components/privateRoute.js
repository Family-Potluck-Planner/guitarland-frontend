import React from "react";
import { Route, Navigate } from "react-router-dom";

// function PrivateRoute({component: Component, ...rest}) {

//   return <Route {...rest} render= {(props) => {
//     if(localStorage.getItem("token")){
//         return (<Component {...props}/>)
//     }else{
//     return (<Navigate to= "/login"/>)
//     }
   
// }}/> 
// }

const PrivateRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

export default PrivateRoute;