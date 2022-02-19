import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialCreds = {
    username: '',
    password: '',
}

const Login = () => {
    const [ creds, setCreds ] = useState(initialCreds)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://guitarlandia.herokuapp.com/api/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            navigate('/guitars')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return(
        <div>
            <h1> Login </h1>
            <form onSubmit = { handleSubmit }>
                <label> Username 
                    <input 
                        name = 'username'
                        placeholder = 'Enter username'
                        onChange = { handleChange }
                    />
                </label>
                <label> Password 
                    <input  
                        name = 'password'
                        placeholder = 'Enter password'
                        onChange = { handleChange }
                    />
                </label>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default Login;