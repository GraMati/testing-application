import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const CarDetails = ({ displayedCars }) => {
    const { id } = useParams();
    const car = displayedCars[id];

    if (!car) {
        return <div>Car not found</div>;
    }

    return (
        <div className="car-details">
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <p>VIN: {car.vin}</p>
            <p>Color: {car.color}</p>
            <img src={car.image} alt={car.name} />
        </div>
    );
}

const mapStateToProps = ({ cars }) => ({
    displayedCars: cars.data,
});

export default connect(mapStateToProps)(CarDetails);