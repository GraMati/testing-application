import React, { useState } from 'react';
import Car from './Car';
import './Cars.css';

const Cars = () => {
    const [displayedCars, setDisplayedCars] = useState([]);
    const [newCar, setNewCar] = useState({
        image: "",
        name: "",
        description: "",
        vin: "",
        color: ""
    });
    const [expandedCarIndex, setExpandedCarIndex] = useState(-1);

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

        setDisplayedCars([newCar, ...displayedCars]);
        setNewCar({
            image: "",
            name: "",
            description: "",
            vin: "",
            color: ""
        });
    };

    const toggleCarDetails = (index) => {
        setExpandedCarIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const handleClearCars = () => {
        setDisplayedCars([]);
        setExpandedCarIndex(-1);
    };

    return (
        <div className="cars-container">
            <div className="form-container">
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
                    <button className="clear-btn" onClick={handleClearCars}>Wyczyść</button>
            </div>

            <div className="cars-list">
                {displayedCars.map((car, index) => (
                    <div key={index} className="car">
                        <Car
                            key={index}
                            image={car.image}
                            name={car.name}
                            description={car.description}
                            vin={car.vin}
                            color={car.color}
                            displayDetails={true}
                            isExpanded={expandedCarIndex === index}
                            toggleDetails={() => toggleCarDetails(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cars;