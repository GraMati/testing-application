import React from 'react';

function Car() {
    const carImage = "https://www.carscoops.com/wp-content/uploads/2019/11/1967-Ford-Mustang-Eleanor.jpg";
    const carName = "Ford Mustang Shelby GT500 Eleanor 1967";
    const carDescription = "Samochód na bazie Forda Mustanga zaprojektowany w latach 60 XX wieku w stylu muscle car.";

    return (
        <div>
            <img src={carImage} alt={carName} />
            <h2>{carName}</h2>
            <p>{carDescription}</p>
        </div>
    );
}

export default Car;