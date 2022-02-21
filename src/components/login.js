import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const initialCreds = {
    username: '',
    password: '',
}

const Login = () => {
    const [ creds, setCreds ] = useState(initialCreds)
    const { push } = useHistory()
    

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
            push('/guitars')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return(
        <Div>
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
        </Div>
    )
}

export default Login;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`