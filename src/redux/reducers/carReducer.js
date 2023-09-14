import { ADD_CAR, CLEAR_CARS, REQUEST_CARS_SUCCESS } from '../actions/actionTypes';

const initialState = {
    data: [],
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case CLEAR_CARS:
            return {
                ...state,
                data: [],
            };
        case REQUEST_CARS_SUCCESS:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default carReducer;
