import axios from 'axios';
import store from "../store";
import {getBearerToken} from "./storageUtils";
import i18n from "../i18n/i18n";
import {openDialog} from "../actions/dialog";
import {stopProgress} from "../actions/progressDialog";
if(i18n.language ==='vi'){
    axios.defaults.headers.post['lang'] = 'vn'
    axios.defaults.headers.get['lang'] = 'vn'
}else{
    axios.defaults.headers.post['lang'] = 'en'
    axios.defaults.headers.get['lang'] = 'en'
}
function callApi(endpoint, method, params, onSuccess) {
    const onFail = (e)=>{
        store.dispatch(stopProgress())
       store.dispatch(openDialog(e.message))
    }
    const header=  {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${getBearerToken()}`
    }
    const api = axios.create({
        baseURL: (endpoint),
        timeout: 60000,
    });
    // api.interceptors.response.use(res => {
    //     return res;
    // }, progressDialog => Promise.reject(progressDialog));
    if (method === 'POST')
        return api.post('',
                params,
            {
                headers: header
            }
        ).then(onSuccess).catch(onFail);
    else
        return api.get('', {
       headers: header
        }).then(onSuccess).catch(onFail);
}

export default callApi;
