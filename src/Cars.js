import React, { useState } from 'react';
import Car from './Car';

const Cars = () => {
    const [displayedCars, setDisplayedCars] = useState([]);
    const [newCar, setNewCar] = useState({
        image: "",
        name: "",
        description: "",
        vin: "",
        color: ""
    });

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({
        ...prevCar,
        [name]: value
    }));
};

const handleAddCar = (e) => {
    e.preventDefault();

    if (displayedCars.length >= 5) {
        return;
    }

    setDisplayedCars((prevCars) => [...prevCars, newCar]);
    setNewCar({
        image: "",
        name: "",
        description: "",
        vin: "",
        color: ""
    });
};

    return (
        <div>
            <form onSubmit={handleAddCar}>
                <label>
                    Obrazek:
                    <input
                        type="text"
                        name="image"
                        value={newCar.image}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                Nazwa:
                <input
                    type="text"
                    name="name"
                    value={newCar.name}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                Opis:
                <input
                    type="text"
                    name="description"
                    value={newCar.description}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                VIN:
                <input
                    type="text"
                    name="vin"
                    value={newCar.vin}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                Kolor:
                <input
                    type="text"
                    name="color"
                    value={newCar.color}
                    onChange={handleInputChange}
                />
                </label>
                <button type="submit">Dodaj samochód</button>
            </form>

            {displayedCars.map((car, index) => (
                <Car
                key={index}
                image={car.image}
                name={car.name}
                description={car.description}
                vin={car.vin}
                color={car.color}
                displayDetails={true}
                />
            ))}
            </div>
        );
    }

export default Cars;