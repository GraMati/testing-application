import * as actionTypes from './actionTypes';

export const addCar = (car) => {
    return {
        type: actionTypes.ADD_CAR,
        payload: car,
    };
};

export const clearCars = () => {
    return {
        type: actionTypes.CLEAR_CARS,
    };
};