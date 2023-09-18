import * as actionTypes from './actionTypes';
import { fetchCarData } from '../../services/carService';

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

export const requestCars = (url) => (dispatch) => {
    return fetchCarData(url)
      .then((response)=> {
        dispatch({
          type: actionTypes.REQUEST_CARS_SUCCESS,
          payload: response,
        });
      });
};
