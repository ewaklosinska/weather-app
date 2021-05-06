import React from 'react';
import './Form.css';

const Form = (props) => {

    return (
        <form onSubmit={props.submit}>
            <input 
            type="text" 
            value={props.value}
            onChange={props.change}
            placeholder="Wpisz miasto"
            />
            <button><i className="search fas fa-search"></i></button>
        </form>
    )
}

export default Form