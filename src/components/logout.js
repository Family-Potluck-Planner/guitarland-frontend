
import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth';

const Logout = ()=> {
    const { push } = useHistory()
    useEffect(() =>{
        axiosWithAuth()
            .post('/logout')
            .then(res => {
                localStorage.removeItem('token')
                push('/login')
            });
    }, []);
    
    return(<div> Logged Out! </div>);
}



export default Logout;