import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input 
                id={ props.passo } 
                type="number" 
                value={ props.passo } 
                onChange={props.setChange} 
            />
        </div>
    )
}