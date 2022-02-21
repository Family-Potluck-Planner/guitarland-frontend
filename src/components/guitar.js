import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAuth'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const Guitar = (props) => {
    const [guitar, setGuitar] = useState({})
    const { guitar_id } = useParams()

    useEffect(() => {
        if (guitar_id) { 
            axiosWithAuth().get(`/guitar/${guitar_id}`)
            .then(res => {
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
        <StyledDiv className='plant'>
            <p>Brand: {guitar.brand}</p>
            <p>Model: {guitar.model}</p>
            <p>Year: {guitar.year}</p>
            <p>Name: {guitar.name}</p>
        </StyledDiv>
    )
}

export default Guitar;

const StyledDiv = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    padding: 1rem;
`