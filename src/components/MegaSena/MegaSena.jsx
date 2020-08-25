import React, { useState} from 'react';
import "./MegaSena.css";

export default props => {
    function naoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 -min) ) + min;
        return array.includes(aleatorio) ? naoContido(min, max, array) : aleatorio;
    }

    function GerarNumeros(qtd) {
        const numeros = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = naoContido(1, 60, nums)
                console.log([ ...nums, novoNumero ])
                return [ ...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

            return numeros;
    }

    const [ qtd, setQtd ] = useState(props.qtd || 6);
    const Iniciais = GerarNumeros(props.qtd);
    const [ numeros, setNumeros ] = useState( Iniciais );

    return (
        <div className="Mega">
            <h2>MegaSena</h2>
             <div>
                 <label>Qtd de Números</label>
                 <input 
                    type="number" 
                    value={ qtd }
                    onChange={e => setQtd(+e.target.value)}
                 
                 />
             </div>
            <button onClick={_ => setNumeros(GerarNumeros(qtd)) }>Gerar Números</button>
            <h3>{ numeros.join(' ') }</h3>
        </div>
    )
}