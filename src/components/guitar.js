import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAuth'
import { useParams } from 'react-router-dom'

const Guitar = (props) => {
    const [guitar, setGuitar] = useState({})
    const { guitar_id } = useParams()

    useEffect(() => {
        if (guitar_id) { 
            axiosWithAuth().get(`/items/${guitar_id}`)
            .then(res => {
                console.log(res.data)
                setGuitar(res.data.guitar)
            })
            .catch(err => {
                console.log(err)
            })
        } else {
            setGuitar(props.guitar) 
        }
    }, [])
    
    return (
        <div className='plant'>
            <p>Brand: {guitar.brand}</p>
            <p>Model: {guitar.model}</p>
            <p>Year: {guitar.year}</p>
            <p>Name: {guitar.name}</p>
        </div>
    )
}

export default Guitar;