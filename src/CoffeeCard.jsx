function CoffeeCard({photo, name, type, description, isNew}){

    return((
        <div className="coffee-card">
            <p>{isNew}</p>
            <h3>{name}</h3>
            <img src={photo} alt="podgląd kawy" />
            <h6>typ kawy to {type}</h6>
            <p>{description}</p>
        </div>
    ))
}

export default CoffeeCard;