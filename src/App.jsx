import { useState } from 'react'
import './App.css'
import CoffeeCard from './CoffeeCard'

const coffeeData=[
  {id: 0, photo: "", name: "", type: "", description: "", isNew: true},
  {id: 1, photo: "", name: "", type: "", description: "", isNew: true},
  {id: 2, photo: "", name: "", type: "", description: "", isNew: true},
  {id: 3, photo: "", name: "", type: "", description: "", isNew: true},
  {id: 4, photo: "", name: "", type: "", description: "", isNew: true},
]

function App() {

  return (
    <div className="site">
      <div className="coffee-list">
        {coffeeData.atmap((coffee) => (
          <CoffeeCard key={coffee.id} photo={coffee.photo} name={coffee.name} type={coffee.type} description={coffee.type} isNew={coffee.isNew} />
        ))}
        </div>
    </div>
  )
}

export default App
