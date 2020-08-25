import './Card.css'
import React from 'react';

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#000'
    }

    return(
        <div className="Card" style={cardStyle}>
            <h2 className="Title">{ props.titulo }</h2>
            <span className="Content">{props.children}</span>
        </div>
    )
};