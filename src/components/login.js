import React, { useState } from 'react';

const initialCreds = {
    username: '',
    password: '',
}

const Login = () => {
    const [ creds, setCreds ] = useState(initialCreds)

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        
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