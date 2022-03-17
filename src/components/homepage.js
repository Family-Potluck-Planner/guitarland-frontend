import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
    
    let { push }= useHistory()

    const handleLogin = () => {
        push('/login')
    }

    const handleSignup = () => {
        push('/signup')

    }
    return(
        <Div>
            <h1> Welcome to GuitarLandia! </h1>
            <StyledButton onClick = { handleLogin }> Login </StyledButton>
            <StyledButton onClick = { handleSignup }> Sign Up</StyledButton>
        </Div>

    )
}

export default HomePage;

const StyledButton = styled.button`
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};
    padding: .25rem 2.5rem;
    border: 1px solid white;
    border-radius: 99999px;
    font-size: 1.5rem;
    margin: 1rem;
`
const Div = styled.div`
    margin: 5rem;

`