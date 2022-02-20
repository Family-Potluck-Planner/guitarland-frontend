
import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth'

const Logout = ()=> {
    const { push } = useHistory()
    useEffect(() =>{
        localStorage.removeItem('token')
        push('/')
        window.location.reload()
    }, [])
    
    return(<div> Logged Out! </div>);
}



export default Logout;