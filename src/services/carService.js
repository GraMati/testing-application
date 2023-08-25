import axios from 'axios';

const API_URL = 'https://private-anon-70524326e9-carsapi1.apiary-mock.com/cars';

export const fetchCarData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching car data:', error);
        throw error;
    }
};