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
      
    }

    return(
        <Div>
            <h1> Add Your Guitar! </h1>
            <FormDiv onSubmit = { handleSubmit }>
                <label> Brand
                    <input
                        name = 'brand'
                        placeholder = 'enter brand'
                        onChange = { handleChange }
                    />
                </label>
                <label> Model
                    <input
                        name = 'model'
                        placeholder = 'enter model'
                        onChange = { handleChange }
                    />
                </label>
                <label> Year
                    <input
                        name = 'year'
                        placeholder = 'enter year'
                        onChange = { handleChange }
                    />
                </label>
                <label> Name
                    <input
                        name = 'name'
                        placeholder = 'Name of your guitar'
                        onChange = { handleChange }
                    />
                </label>
                <button> Submit </button>
            </FormDiv>
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
`
const FormDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`