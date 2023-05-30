import React, { useState } from 'react';

const Car = (props) => {
    const carImage = props.image;
    const carName = props.name || "Not available";
    const carDescription = props.description;
    const carVIN = props.vin;
    const carColor = props.color;

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <img src={carImage} alt={carName} />
            <h2>{carName}</h2>
            <p>{carDescription}</p>
            {showDetails && (
                <div>
                    <p>VIN: {carVIN}</p>
                    <p>Kolor: {carColor}</p>
                </div>
            )}
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
            </button>
        </div>
    );
}

export default Car;