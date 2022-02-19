import React from 'react';
import { useHistory } from 'react-router-dom';

const GuitarList = () => {
    const { push }= useHistory()

    const handleClick = () => {
        push('/guitars/add')
    }
    return(
        <div>
            <h1> Guitars </h1>
            <button onClick = { handleClick }> Add a guitar! </button>
        </div>
    )
}
export default GuitarList;