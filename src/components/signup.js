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
        })
        .catch(err =>{
            console.error(err)
        })
        push('/')   
    }

    return(
        <Div>
            <h1> Sign-Up </h1>
            <FormDiv>
                <Label> Username 
                    <StyledInput 
                        name = 'username'
                        placeholder = 'Pick a username'
                        onChange = {handleChange}
                    />
                </Label>
                <Label> Password
                    <StyledInput
                        name = 'password'
                        placeholder = 'Pick a password'
                        onChange = {handleChange}
                    />
                </Label>
            </FormDiv>
            <StyledButton onClick = {handleSubmit}> Submit </StyledButton>    
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