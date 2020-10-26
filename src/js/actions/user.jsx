import {useDispatch} from "react-redux";
import callApi from "../services/api";
export  const requestLogin = () => {
    return dispatch => callApi('http://web.com',"POST").then((res)=>{
        return dispatch(userLogin({username:'aa',password:'pass'}))
    }).catch((e)=>{
        return dispatch(userLogin({username:'aa',password:'pass'}))

    });


}
export const userLogin = (user) => {
    return {
        type : 'LOGIN',
        payload : user
    }
}

