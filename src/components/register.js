import React, { useState } from 'react';

const initialCreds = {
    username: '',
    password: '',
}

const Register = () => {
    const [ creds, setCreds ] = useState(initialCreds)

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

    }

    return(
        <div>
            <h1> Register </h1>
            <form onSubmit = {handleSubmit}>
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
            </form>
        </div>
    )
}
export default Register;