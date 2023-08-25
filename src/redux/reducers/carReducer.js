import { ADD_CAR, CLEAR_CARS } from '../actions/actionTypes';

const initialState = {
    cars: [],
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload],
            };
        case CLEAR_CARS:
            return {
                ...state,
                cars: [],
            };
        default:
            return state;
    }
};

export default carReducer;