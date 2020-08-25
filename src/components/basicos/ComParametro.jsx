import React from "react";

function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado';
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <span><strong>{ props.aluno }</strong> tem <b>Nota { props.nota }</b></span>
            <span>{ status }</span>
        </div>
    )
}

export default ComParametro;