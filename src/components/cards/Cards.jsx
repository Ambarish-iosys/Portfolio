import React from 'react'
import '../cards/cards.css'
const Cards = ({card_title,card_subtitle,card_year,card_body}) => {
    return (
        <div className="card-conatiner">
            <div className="card-subtitle">
                <h5>{card_subtitle}</h5>
                <span>{card_year}</span>
            </div>
             <h3>{card_title}</h3>
             <p>{card_body}</p>
        </div>
    )
}

export default Cards
