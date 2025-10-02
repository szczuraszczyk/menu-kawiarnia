import CoffeeCard from "./CoffeeCard";
import './App';

function CoffeeList({coffeeData}) {
    return ((
        <div className="coffee-list">
            {coffeeData.map((coffee => (
                <CoffeeCard key={coffee.id} photo={coffee.photo} name={coffee.name} type={coffee.type} description={coffee.description} isNew={coffee.isNew} />
            )))}
        </div>
    ))

}

export default CoffeeList;