import React, { useState } from 'react'
import './card.css'
import { CardOpen } from './CardOpen'

export const Card = ({ title, emoji, desc, cta, primaryClr, titleClr, secondClr, btnClr }) => {
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setClick(true);
  }

  return (
    <div>
      {!click ? (
        <article className="card" style={{ backgroundColor: primaryClr }}>
          <h3 className="card-title" style={{ color: titleClr }}>{title} {emoji}</h3>
          <container style={{ backgroundColor: secondClr }}>
            <p>{desc}</p>
            <button
              type="submit"
              className="call-to-action"
              onClick={handleClick}
              onChange={(event) => setClick(event.target.value)}
              style={{ background: btnClr }}>
              {cta}
            </button>
          </container>
        </article>
      ) : (<CardOpen
        flipTitle="Lemon"
        flipEmoji="🍋"
        topClr="#8CFFBA"
        bottomClr="#CFFFE2"
        txtClr="#166F39" />)}
    </div>
  )
}