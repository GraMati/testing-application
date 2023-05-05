import React from 'react';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car
          image="https://www.tuningblog.eu/wp-content/uploads/2022/06/Mansory-Bentley-Bentayga-Speed-Feroza-Edition-2022-Tuning-5.jpg"
          name="Bentley Bentayga"
          description="SUV klasy premium."
        />
        <Car
          image="https://samochodyelektryczne.org/img/tesla_model_s/1/tesla_model_s_162.jpg"
          description="Elektryczny samochód klasy premium."
          vin="1HGCM82633A123456"
          color="Czarny"
          displayDetails
        />
        <Car
          image="https://www.carscoops.com/wp-content/uploads/2019/11/1967-Ford-Mustang-Eleanor.jpg"
          name="Ford Mustang Shelby GT500 Eleanor 1967"
          description="Samochód na bazie Forda Mustanga zaprojektowany w latach 60 XX wieku w stylu muscle car."
        />
      </header>
    </div>
  );
}

export default App
