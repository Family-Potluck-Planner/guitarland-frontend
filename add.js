import React from 'react';

const AddGuitar = () => {
    return(
        <div>
            <form>
                <label> Brand
                    <input
                        placeholder = 'enter brand'
                        onChange = { handelChange }
                    />
                </label>
                <label> Model
                    <input
                        placeholder = 'enter model'
                        onChange = { handelChange }
                    />
                </label>
                <label> Year
                    <input
                        placeholder = 'enter year'
                        onChange = { handelChange }
                    />
                </label>
                <label> Name
                    <input
                        placeholder = 'Does your guitar have a name?'
                        onChange = { handelChange }
                    />
                </label>
            </form>
        </div>
    )
}
export default AddGuitar;