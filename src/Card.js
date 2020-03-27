import React, { useState } from 'react'
import './card.css'
import { CardOpen } from './CardOpen'

export const Card = ({ title, emoji, desc, cta }) => {
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setClick(true);
  }

  return (
    <div>
      {!click ? (
        <article className="card">
          <h3 className="card-title">{title} {emoji}</h3>
          <container>
            <p>{desc}</p>
            <button
              type="submit"
              className="call-to-action"
              onClick={handleClick}
              onChange={(event) => setClick(event.target.value)}>
              {cta}
            </button>
          </container>
        </article>
      ) : (<CardOpen
        flipTitle="Lemon"
        flipEmoji="🍋" />)}
    </div>
  )
}