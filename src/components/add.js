import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth'
import styled from 'styled-components';
const initialFormValues = {
    brand: '',
    model: '',
    year: '',
    name: '',
}

const AddGuitar = () => {

    const [ formValues, setFormValues ] = useState(initialFormValues)
    const { push } = useHistory();

    const postNewGuitar = (newGuitar) => {
        axiosWithAuth().post('https://guitarlandia.herokuapp.com/api/guitars', newGuitar)
        .then(res => {
            push('/guitars');
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    } 
    const submitGuitar = () => {
        const newGuitar = {
            brand: formValues.brand,
            model: formValues.model,
            year: formValues.year,
            name: formValues.name,
        }
        postNewGuitar(newGuitar)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submitGuitar()
        push('/guitars')
      
    }

    return(
        <Div>
            <h1> Add Your Guitar! </h1>
            <FormDiv>
                <Label> Brand
                    <StyledInput
                        name = 'brand'
                        placeholder = 'enter brand'
                        onChange = { handleChange }
                    />
                </Label>
                <Label> Model
                    <StyledInput
                        name = 'model'
                        placeholder = 'enter model'
                        onChange = { handleChange }
                    />
                </Label>
                <Label> Year
                    <StyledInput
                        name = 'year'
                        placeholder = 'enter year'
                        onChange = { handleChange }
                    />
                </Label>
                <Label> Name
                    <StyledInput
                        name = 'name'
                        placeholder = 'Name of your guitar'
                        onChange = { handleChange }
                    />
                </Label>
            </FormDiv>
            <StyledButton onClick = { handleSubmit }> Submit </StyledButton>
        </Div>
    )
}
export default AddGuitar;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    // border: 1px solid white;
`
const FormDiv= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // border: 1px solid white;
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid white;
    padding: 1rem;
    font-size: 1.5rem;
`
const StyledButton = styled.button`
    background-color: ${pr => pr.theme.secondaryColor};
    padding: .25rem 2.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    margin: 1rem;
`
const StyledInput = styled.input`
    margin: .5rem;
    padding: .5rem;
    text-align: center;
    border: none;
    border-radius: 99999px;
`