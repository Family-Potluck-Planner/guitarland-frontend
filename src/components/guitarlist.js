import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Guitar from './add'

const GuitarList = () => {
    const [ guitars, setGuitars ] = useState([])
    const { push }= useHistory()

    useEffect(() => {
        axios.get('https://guitarlandia.herokuapp.com/api/guitars')
        .then(res => {
            setGuitars(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    })

    const handleClick = () => {
        push('/guitars/add')
    }
    return(
        <div>
            <h1> Guitars </h1>
            <button onClick = { handleClick }> Add a guitar! </button>
            {
                guitars.map(guitar =>{
                    return <Guitar />
                })
            }
        </div>
    )
}
export default GuitarList;