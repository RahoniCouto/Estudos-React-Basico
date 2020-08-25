import React from 'react';
import DiretaFilho from './DiretaFilho';


export default (props) => {
    return (
        <div>
            <DiretaFilho nome="Carol" idade={33} nerd={true} />
            <DiretaFilho nome="Isabela" idade={29} nerd={false} />
        </div>
    )
}