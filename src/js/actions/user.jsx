import callApi from "../services/callApi";
import {LOGIN_API, LOGOUT_API} from "../constansts/apiConstants";
export  const requestLogin = (params,onSuccess,onFail) => {
    return () => callApi(LOGIN_API,"POST", params, onSuccess, onFail)
}
export  const logout = (onSuccess,onFail) => {
    return () => callApi(LOGOUT_API,"GET", {}, onSuccess, onFail)
}
export const userLogin = (user) => {
    return {
        type : 'LOGIN',
        payload : user
    }
}

