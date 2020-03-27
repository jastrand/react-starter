import React from 'react'
import './card-open.css'

export const CardOpen = ({ flipEmoji, flipTitle }) => {
  return (
    <article className="card-open">
      <h3 className="flip-title">{flipTitle}</h3>
      <h3 className="flip-emoji">{flipEmoji}</h3>
    </article>
  )
}