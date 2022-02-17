import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    
    let navigate = useNavigate()

    const handleLogin = (e) => {
        navigate('/login')
    }

    const handleSignup = (e) => {
        navigate('/signup')

    }
    return(
        <div>
            <h1>Guitarland</h1>
            <button onClick = { handleLogin }> Login </button>
            <button onClick = { handleSignup }> Sign Up</button>
        </div>

    )
}

export default HomePage;