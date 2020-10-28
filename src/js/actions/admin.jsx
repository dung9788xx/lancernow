import callApi from "../services/callApi";
import {ADMIN_LIST_USER_API, LOGIN_API} from "../constansts/apiConstants";
export  const getListUser = (onSuccess,onFail) => {
    return () => callApi(ADMIN_LIST_USER_API,"GET", params, onSuccess, onFail)
}


