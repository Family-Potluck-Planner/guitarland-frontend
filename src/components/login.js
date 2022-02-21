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
            <FormDiv >
                <Label> Username 
                    <StyledInput 
                        name = 'username'
                        placeholder = 'Enter username'
                        onChange = { handleChange }
                    />
                </Label>
                <Label> Password 
                    <StyledInput  
                        name = 'password'
                        placeholder = 'Enter password'
                        onChange = { handleChange }
                    />
                </Label>
                
            </FormDiv>
            <StyledButton onClick = { handleSubmit }> Submit </StyledButton>
        </Div>
    )
}

export default Login;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    // border: 1px solid white;
`
const FormDiv= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // border: 1px solid white;
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid white;
    padding: 1rem;
    font-size: 1.5rem;
`
const StyledButton = styled.button`
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};
    padding: .25rem 2.5rem;
    border: 1px solid white;
    border-radius: 99999px;
    font-size: 1.5rem;
    margin: 1rem;
`
const StyledInput = styled.input`
    margin: .5rem;
    padding: .5rem;
    text-align: center;
    border: none;
    border-radius: 99999px;
    background-color: ${pr => pr.theme.primaryColor};
    color: white;
    border: 1px solid white;
`
