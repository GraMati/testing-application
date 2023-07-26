import React, { useState } from 'react';

const Car = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails((prevState) => !prevState);
    };

    return (
        <div className="car">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>

            {props.displayDetails && (
                <div>
                    <button onClick={toggleDetails}>
                        {showDetails ? "Ukryj szczegóły" : "Pokaż szczegóły"}
                    </button>
                    {showDetails && (
                        <div className="car-details">
                            <p>VIN: {props.vin}</p>
                            <p>Kolor: {props.color}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

    export default Car;