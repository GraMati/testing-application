import axios from 'axios';

const API_URL = 'https://private-anon-70524326e9-carsapi1.apiary-mock.com/cars';

const mapApiCarToComponentCar = (apiCar) => {
    const colorNames = [
        'Red',
        'Blue',
        'Green',
        'Silver',
        'Purple',
        'Brown',
        'Black',
        'White',
    ];

    const getRandomColorName = () => {
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        return colorNames[randomIndex];
    };

    return {
        image: apiCar.img_url,
        name: `${apiCar.make} ${apiCar.model}`,
        description: `Year: ${apiCar.year}, Horsepower: ${apiCar.horsepower}, Price: ${apiCar.price}`,
        vin: apiCar.id,
        color: getRandomColorName(),
    };
};

export const fetchCarData = async () => {
    try {
        const response = await axios.get(API_URL);
        const mappedCars = response.data.map(apiCar => mapApiCarToComponentCar(apiCar));
        return mappedCars;
    } catch (error) {
        console.error('Error fetching car data:', error);
        throw error;
    }
};