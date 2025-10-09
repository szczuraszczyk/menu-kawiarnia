import CoffeeCard from "./CoffeeCard";
import './App';

function CoffeeList({coffeeData}) {

    if (coffeeData.length === 0) {
        return <p>We currently don't have this type of coffee, our apologizes.</p>;
    }

    return ((
        <div className="coffee-list">
            {coffeeData.map((coffee => (
                <CoffeeCard key={coffee.id} photo={coffee.photo} name={coffee.name} type={coffee.type} description={coffee.description} isNew={coffee.isNew} />
            )))}
        </div>
    ))

}

export default CoffeeList;