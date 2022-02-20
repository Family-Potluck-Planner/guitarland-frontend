import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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
        axios.post('https://guitarlandia.herokuapp.com/api/auth/register', user)
        .then(res => {
            setUser(initialUser)
            push('/login')
        })
        .catch(err =>{
            console.error(err)
        })
        
    }

    return(
        <div>
            <h1> SignUp </h1>
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
export default SignUp;