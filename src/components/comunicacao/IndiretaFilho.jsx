import React from 'react';

export default (props) => {
    const call = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={ _=>  call('João', gerarIdade(), gerarNerd())}>
                Fornecer informação
            </button>
        </div>
    )
}