import { useState } from 'react'
import FilterMenu from './FilterMenu'
import './App.css'
import CoffeeList from './CoffeeList'

const coffeeData=[
  {id: 0, className: "filterCoffee cold-brew", photo: "./Cold-brew-1.jpg", name: "Cold Darkness", type: "cold brew", description: "nyan nyan nyan nyan nyan ", isNew: true},
  {id: 1, className: "filterCoffee latte", photo: "./Latte-1.jpg", name: "Lovely Foam", type: "latte", description: "nyan nyan nyan nyan nyan ", isNew: false},
  {id: 2, className: "filterCoffee cappuccino", photo: "./Cappuccino-1.jpg", name: "Calm Knoll", type: "cappuccino", description: "nyan nyan nyan nyan nyan ", isNew: true},
  {id: 3, className: "filterCoffee cold-brew", photo: "./Cold-brew-2.jpg", name: "Fiery Dance", type: "cold brew", description: "nyan nyan nyan nyan nyan ", isNew: false},
  {id: 4, className: "filterCoffee latte", photo: "./Latte-2.jpg", name: "Sweet Spiral", type: "latte", description: "nyan nyan nyan nyan nyan ", isNew: true},
  {id: 5, className: "filterCoffee cappuccino", photo: "./Cappuccino-2.png", name: "Lone Pyramid", type: "cappuccino", description: "nyan nyan nyan nyan nyan ", isNew: false},
]

function App() {

  const [currentCoffeeType, setCurrentCoffeeType] = useState("all");

  const handleFilterChange = (selectedFilter) => {
    setCurrentCoffeeType(selectedFilter);
  }

  function prepareCoffeeData(){
    return coffeeData.filter(
      (coffee) => coffee.type === currentCoffeeType || currentCoffeeType === "all"
    )
  }

  return (
    <div className="site">
      <h1>Our Coffees</h1>
      <FilterMenu onFilterChange={handleFilterChange}/>
      <CoffeeList coffeeData={prepareCoffeeData()} />
    </div>
  )
}

export default App;
