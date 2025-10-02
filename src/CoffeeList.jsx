import CoffeeCard from "./CoffeeCard";

function CoffeeList() {
    return ((
        <div className="coffee-list">
            {coffeeData.map((coffee => (
                <CoffeeCard key={coffee.id} photo={coffee.photo} name={coffee.name} type={coffee.type} description={coffee.description} isNew={coffee.isNew} />
            )))}
        </div>
    ))

}

export default CoffeeList;