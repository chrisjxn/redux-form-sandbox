import axios from 'axios';

const initialState = {
    user: {}
}

// action types
const GET_USER_INFO = 'GET_USER_INFO';


// action creators
export function getUserInfo() {
    const user = axios.get('/auth/me').then(res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

// reducer
export default function mainReducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })

        default:
            return state;
    }
}