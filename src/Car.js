import React, { useState } from 'react';

const Car = ({ image, name, description, displayDetails, vin, color }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails((prevState) => !prevState);
    };

    return (
        <div className="car">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>

            {displayDetails && (
                <div>
                    <button onClick={toggleDetails}>
                        {showDetails ? "Ukryj szczegóły" : "Pokaż szczegóły"}
                    </button>
                    {showDetails && (
                        <div className="car-details">
                            <p>VIN: {vin}</p>
                            <p>Kolor: {color}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Car;