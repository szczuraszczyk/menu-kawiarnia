import { useState } from 'react'
import FilterMenu from './FilterMenu'
import './App.css'
import CoffeeList from './CoffeeList'

const coffeeData=[
  {id: 0, className: "filterCoffee cold-brew", photo: "f", name: "a", type: "cold brew", description: "", isNew: true},
  {id: 1, className: "filterCoffee drip", photo: "f", name: "b", type: "drip", description: "", isNew: false},
  {id: 2, className: "filterCoffee espresso", photo: "f", name: "c", type: "espresso", description: "", isNew: true},
  {id: 3, className: "filterCoffee cold-brew", photo: "f", name: "d", type: "cold brew", description: "", isNew: false},
  {id: 4, className: "filterCoffee drip", photo: "f", name: "e", type: "drip", description: "", isNew: true},
  {id: 5, className: "filterCoffee espresso", photo: "f", name: "f", type: "espresso", description: "", isNew: false},
]

function App() {

  return (
    <div className="site">
      <h1>Our Coffees</h1>
      <FilterMenu />
      <CoffeeList  coffeeData={coffeeData} />
    </div>
  )
}

export default App;
