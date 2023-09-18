import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Car from './Car';
import './Cars.css';
import { requestCars, addCar, clearCars } from '../src/redux/actions/carActions';

const Cars = ({ requestCars, displayedCars = [], clearCars, addCar }) => {
    const [newCar, setNewCar] = useState({
        image: "",
        name: "",
        description: "",
        vin: "",
        color: "",
    });

    const [expandedCarIndex, setExpandedCarIndex] = useState(-1);
    const imageInputRef = useRef(null);

    useEffect(() => {
        requestCars();
    }, [requestCars]);

    useEffect(() => {
        imageInputRef.current.focus();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCar((prevCar) => ({
            ...prevCar,
            [name]: value
        }));
    };

    const handleAddCar = (e) => {
        e.preventDefault();

        const carToAdd = {
            image: newCar.image,
            name: newCar.name,
            description: newCar.description,
            vin: newCar.vin,
            color: newCar.color,
        };

        addCar(carToAdd);
    };

    const toggleCarDetails = (index) => {
        setExpandedCarIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const handleClearCars = () => {
        clearCars();
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
                            ref={imageInputRef}
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

const mapStateToProps = ({ cars }) => ({
    displayedCars: cars.data,
});

const mapDispatchToProps = (dispatch) => ({
    requestCars: () => dispatch(requestCars()),
    addCar: (car) => dispatch(addCar(car)),
    clearCars: () => dispatch(clearCars()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cars);
