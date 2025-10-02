import { useState } from 'react'
import './App.css'
import './CoffeeList'

const coffeeData=[
  {id: 0, photo: "", name: "", type: "cold brew", description: "", isNew: true},
  {id: 1, photo: "", name: "", type: "drip", description: "", isNew: false},
  {id: 2, photo: "", name: "", type: "espresso", description: "", isNew: true},
  {id: 3, photo: "", name: "", type: "cold brew", description: "", isNew: false},
  {id: 4, photo: "", name: "", type: "drip", description: "", isNew: true},
  {id: 5, photo: "", name: "", type: "espresso", description: "", isNew: false},
]

function App() {

  return (
    <div className="site">
      <CoffeeList />
    </div>
  )
}

export default App
