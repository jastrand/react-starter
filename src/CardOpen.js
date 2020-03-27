import React from 'react'

export const CardOpen = ({ emoji, title }) => {
  return (
    <article className="card open">
      <h3>{title}</h3>
      <h3>{emoji}</h3>
    </article>
  )
}