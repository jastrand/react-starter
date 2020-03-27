import React from 'react'
import { Card } from './Card'

export const App = () => {
  return (
    <div>
      <Card
        title="Lemon"
        emoji="🍋"
        desc="This is a really tasty fruit"
        cta="Order now" />
    </div>
  )
}
