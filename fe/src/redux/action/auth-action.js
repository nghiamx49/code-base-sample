import { LOGIN_SUCCESS, LOGOUT } from "../constants"

export const saveDataToRedux = (payload) => {
    return {type: LOGIN_SUCCESS, payload}
}

export const logout = () => {
    return {type: LOGOUT}
}