import React from 'react'

export const CardOpen = ({ emoji, title }) => {
  return (
    <article className="card open">
      <h3 className="card-title">{title}</h3>
      <h3 className="card-emoji">{emoji}</h3>
    </article>
  )
}