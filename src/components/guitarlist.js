import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuitarList = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/guitars/add')
    }
    return(
        <div>
            <h1> Guitars </h1>
            <button onClick = { handleClick }> Add a guitar! </button>
        </div>
    )
}
export default GuitarList;