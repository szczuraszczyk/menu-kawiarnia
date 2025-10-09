import allCoffees from "./App";

function FilterMenu({onFilterChange}){

    return(
        <div className="filter-menu">
            <button className="button" onClick={()=> onFilterChange("all")}>ALL</button>
            <button className="button" onClick={()=> onFilterChange("cold brew")}>COLD BREW</button>
            <button className="button" onClick={()=> onFilterChange("latte")}>DRIP</button>
            <button className="button" onClick={()=> onFilterChange("cappuccino")}>CAPPUCCINO</button>
        </div>
    )
}

export default FilterMenu;