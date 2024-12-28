import React from 'react'
import './Card.css'

const Card = ({image, title, text, button}) => {
  return (
    <div>
      <a href="#" className="card">
      <div className="card__image">
        <img style={{width:"100%"}} src={image} alt={title} />
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__content">
        <p>{text}</p>
        <span>
          {button}
          <i className="fa-solid fa-plane-departure" />
        </span>
      </div>
    </a>
    </div>
  )
}

export default Card
