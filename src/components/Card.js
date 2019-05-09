import React from 'react';
import './Card.scss';

export const CardInfo = (props) => {
    return (
        <div className="card-info">
            {props.children}
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card;