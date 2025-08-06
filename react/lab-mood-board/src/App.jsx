import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="red"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Vermelho"
        />
        <MoodBoardItem
          color="blue"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Azul"
        />
        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Verde"
        />
        <MoodBoardItem
          color="purple"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Roxo"
        />
        <MoodBoardItem
          color="orange"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Laranja"
        />
        <MoodBoardItem
          color="pink"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Rosa"
        />
      </div>
    </div>
  )
}

// 🔧 Aqui está o componente App
function App() {
  return (
    <div className="App">
      <MoodBoard />
    </div>
  )
}

export default App
