
import React,{useEffect}  from "react";
import { useNavigate } from 'react-router-dom';

const Logout = ()=> {
    const navigate = useNavigate()
    useEffect(() =>{
        const token = localStorage.getItem("token")
        localStorage.removeItem('token')
        navigate('/login')
        window.location.reload()
    }, [])
    
    return(<div> Logged Out! </div>);
}



export default Logout;