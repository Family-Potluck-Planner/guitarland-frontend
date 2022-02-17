import React, {useState} from 'react';

const AddGuitar = () => {

    const [ state, setState ] = useState()

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        
    }

    return(
        <div>
            <h1> Add Your Guitar! </h1>
            <form onSubmit = { handleSubmit }>
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
                        placeholder = 'Does your guitar have a name?'
                        onChange = { handleChange }
                    />
                </label>
                <button> Submit </button>
            </form>
        </div>
    )
}
export default AddGuitar;