import React from 'react';

const Car = (props) => {
    const carImage = props.image;
    const carName = props.name || "Not available";
    const carDescription = props.description;

    return (
        <div>
            <img src={carImage} alt={carName} />
            <h2>{carName}</h2>
            <p>{carDescription}</p>
        </div>
    );
}

export default Car;