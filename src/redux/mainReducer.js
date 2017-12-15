import axios from 'axios';

const initialState = {
    user: {},
    allVehicles: []
}

// action types
const GET_USER_INFO = 'GET_USER_INFO';
const GET_ALL_VEHICLES = 'GET_ALL_VEHICLES';


// action creators
export function getUserInfo() {
    const user = axios.get('/auth/me').then(res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

export function getAllVehicles() {
    const vehicles = axios.get('/api/vehicles').then(res => res.data)
    return {
        type: GET_ALL_VEHICLES,
        payload: vehicles
    }
}

// reducer
export default function mainReducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER_INFO + '_PENDING':
            return state;
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_USER_INFO + '_REJECTED':
            return state;

        case GET_ALL_VEHICLES + '_PENDING':
            return state;
        case GET_ALL_VEHICLES + '_FULFILLED':
            return Object.assign({}, state, { allVehicles: action.payload });
        case GET_ALL_VEHICLES + '_REJECTED':
            return state;

        default:
            return state;
    }
}