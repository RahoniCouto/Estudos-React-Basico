import React, { useState }from 'react';
import './Input.css';

export default props => {
    const [value, setValor] = useState('inicial');

    function WhenChange(e){
        setValor(e.target.value) 
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div className="divInput">
                <input value={value} onChange={WhenChange}/>
                <input value={value} readOnly/>
                <input value={undefined}/>
            </div>
        </div>
    )
}