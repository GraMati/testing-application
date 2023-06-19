import React, { useState } from 'react';
import Car from './Car';

const Cars = () => {
    const [displayedCars, setDisplayedCars] = useState([]);

    const carsData = [
        {
            image: "https://samochodyelektryczne.org/img/tesla_model_s/1/tesla_model_s_162.jpg",
            name: "Tesla Model S",
            description: "Elektryczny samochód klasy premium.",
            vin: "1HGCM82633A123456",
            color: "Czarny"
        },
        {
            image: "https://www.tuningblog.eu/wp-content/uploads/2022/06/Mansory-Bentley-Bentayga-Speed-Feroza-Edition-2022-Tuning-5.jpg",
            name: "Bentley Bentayga",
            description: "SUV klasy premium.",
            vin: "1HGCM82633A123456",
            color: "Turkusowy"
        },
        {
            image: "https://www.carscoops.com/wp-content/uploads/2019/11/1967-Ford-Mustang-Eleanor.jpg",
            name: "Ford Mustang Shelby GT500 Eleanor 1967",
            description: "Samochód na bazie Forda Mustanga zaprojektowany w latach 60 XX wieku w stylu muscle car.",
            vin: "1HGCM82633A123456",
            color: "Srebrny"
        }
    ];

    const handleAddCar = () => {
        if (displayedCars.length >= 5) {
          return;
        }

        const randomCar = carsData[Math.floor(Math.random() * carsData.length)];
        setDisplayedCars(prevCars => [...prevCars, randomCar]);
      };

      return (
        <div>
          <button onClick={handleAddCar} disabled={displayedCars.length >= 5}>
            Dodaj samochód
          </button>
          {displayedCars.map((car, index) => (
            <Car
              key={index}
              image={car.image}
              name={car.name}
              description={car.description}
              vin={car.vin}
              color={car.color}
              displayDetails={true}
            />
          ))}
        </div>
      );
    }

export default Cars;