import { LOGIN_SUCCESS, LOGOUT } from "../constants";

const initialState = {
    user: {},
    token: "",
    isAuthenticated: false
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.payload}
        case LOGOUT:
            return initialState
        default:
            return state;
    }
}