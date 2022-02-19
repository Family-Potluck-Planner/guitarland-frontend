import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    
    let { push }= useHistory()

    const handleLogin = (e) => {
        push('/login')
    }

    const handleSignup = (e) => {
        push('/signup')

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