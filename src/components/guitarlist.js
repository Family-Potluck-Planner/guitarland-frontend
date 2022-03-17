import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Guitar from './guitar';
import styled from 'styled-components';

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
    const handleGuitar = () => {
        push(`/guitar/${guitar_id}`)
    }
    return(
        <div>
            <h1> Guitars </h1>
            <StyledButton onClick = { handleClick }> Add a guitar! </StyledButton>
            <StyledDiv onClick = { handleGuitar }>
                {
                    guitars.map(guitar =>{
                        return <Guitar guitar = {guitar}/>
                    })
                }
            </StyledDiv>
        </div>
    )
}
export default GuitarList;

const StyledButton = styled.button`
    background-color: ${pr => pr.theme.secondaryColor};
    padding: .25rem 2.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    margin: .5rem;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`