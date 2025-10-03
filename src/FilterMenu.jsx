import allCoffees from "./App";

function FilterMenu(){

    return(
        <div className="filter-menu">
            <button className="button" onClick={allCoffees}>ALL</button>
            <button className="button">COLD BREW</button>
            <button className="button">DRIP</button>
            <button className="button">ESPRESSO</button>
        </div>
    )
}

export default FilterMenu;