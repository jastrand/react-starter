import React from 'react'
import { Card } from './Card'
import './index.css'

export const App = () => {
  return (
    <div className="print-cards">
      <Card
        title="Lemon"
        emoji="🍋"
        desc="This is a really tasty fruit"
        cta="Order now"
        primaryClr="#8CFFBA"
        titleClr="#166F39"
        secondClr="#CFFFE2"
        btnClr="#FCED84" />
      <Card
        title="Rocket"
        emoji="🚀"
        desc="Join us into the outer space"
        cta="Book now"
        primaryClr="#A6CFE2"
        titleClr="#0B0C11"
        secondClr="#C2DCE9"
        btnClr="#000" />
      <Card
        title="Lemon"
        emoji="🍋"
        desc="This is a really tasty fruit"
        cta="Order now"
        primaryClr="#8CFFBA"
        titleClr="#166F39"
        secondClr="#CFFFE2"
        btnClr="#FCED84" />
    </div>
  )
}
