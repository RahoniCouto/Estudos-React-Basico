import React from 'react';

function Aleatorio(props) {
    const { min, max } = props;
    const Aleatorio = Math.floor(Math.random() * (max - min) ) + min;
    return (
        <div>
            <h2>Número Aleatorio entre os valores:</h2>
            <span><strong>Min:</strong>{ min } <strong>Max:</strong>{ max }</span>
            <h3>Valor: { Aleatorio }</h3>
        </div>
    )
}

export default Aleatorio;