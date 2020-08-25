import React from 'react';
import If, { Else } from './If';

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem vindo <b>{ usuario.nome }</b> !
                <Else>
                    Sejá Bem Vindo Pequeno Gafanhoto
                </Else>
            </If>
        </div>
    )
}