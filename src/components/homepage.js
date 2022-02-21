import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
    
    let { push }= useHistory()

    const handleLogin = (e) => {
        push('/login')
    }

    const handleSignup = (e) => {
        push('/signup')

    }
    return(
        <Div>
            <h1> Guitarlandia </h1>
            <StyledButton onClick = { handleLogin }> Login </StyledButton>
            <StyledButton onClick = { handleSignup }> Sign Up</StyledButton>
        </Div>

    )
}

export default HomePage;

const StyledButton = styled.button`
    margin: 1rem;
    padding: .5rem 1rem;
`
const Div = styled.div`
    margin: 5rem;

`