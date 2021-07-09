import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return{
        value,
        onChange: event => setValue(event.target.value)
    }
}

function AddTodo({ onCreate }) {

    const input = useInputValue('')
//    const [value, setValue] = useState('')

    function SubmitChanges(event) {
        event.preventDefault()

        if (input.value.trim()){
            onCreate(input.value)
        }
//        if (value.trim()){
//            onCreate(value)
//        }
        //setValue()

    }

    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={ SubmitChanges } >
            <input {...input} />
            <button type="submit" >Добавить строку</button>
        </form>
    )
//            <input {...input} />
//            <input value={value} onChange={ event => setValue(event.target.value) } />
}
AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo;
