import React from 'react'
import './card-open.css'

export const CardOpen = ({ topClr, bottomClr, flipTitle, flipEmoji, txtClr }) => {
  return (
    <div>
      <section className="top" style={{ backgroundColor: topClr, color: txtClr }}>{flipTitle}</section>
      <section className="bottom" style={{ backgroundColor: bottomClr }}>{flipEmoji}</section>
    </div>
  )
}