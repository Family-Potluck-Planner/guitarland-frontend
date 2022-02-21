import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const initialUser = {
    username: '',
    password: '',
}

const SignUp = () => {
    const [ user, setUser ] = useState(initialUser)
    const { push } = useHistory();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://guitarlandia.herokuapp.com/api/auth/signup', user)
        .then(res => {
            setUser(initialUser)
            push('/')
        })
        .catch(err =>{
            console.error(err)
        })
        
    }

    return(
        <Div>
            <h1> SignUp </h1>
            <FormDiv onSubmit = {handleSubmit}>
                <label> Username 
                    <input 
                        name = 'username'
                        placeholder = 'Pick a username'
                        onChange = {handleChange}
                    />
                </label>
                <label> Password
                    <input
                        name = 'password'
                        placeholder = 'Pick a password'
                        onChange = {handleChange}
                    />
                </label>
                <button> Submit </button>
            </FormDiv>
        </Div>
    )
}
export default SignUp;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
`
const FormDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`