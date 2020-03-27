import React from 'react'
import { Card } from './Card'

export const App = () => {
  return (
    <div>
      <Card
        title="Hello"
        emoji="🍓"
        desc="This is my card"
        cta="Click me" />
    </div>
  )
}
