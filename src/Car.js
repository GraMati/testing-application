import React, { useState } from 'react';

const Car = ({ image, name, description, vin, color, displayDetails, isExpanded, toggleDetails }) => {
    return (
        <div className="car">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>

            {displayDetails && (
                <div>
                    <button onClick={toggleDetails}>
                        {isExpanded ? "Ukryj szczegóły" : "Pokaż szczegóły"}
                    </button>
                    {isExpanded && (
                        <div className="car-details">
                            <p>VIN: {vin}</p>
                            <p>Kolor: {color}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Car;