import React from 'react';

const Car = (props) => {
    const carImage = props.image;
    const carName = props.name || "Not available";
    const carDescription = props.description;
    const carVIN = props.vin;
    const carColor = props.color;

    return (
        <div>
            <img src={carImage} alt={carName} />
            <h2>{carName}</h2>
            <p>{carDescription}</p>
            {props.displayDetails && (
                <div>
                    <p>VIN: {carVIN}</p>
                    <p>Kolor: {carColor}</p>
                </div>
            )}
        </div>
    );
}

export default Car;