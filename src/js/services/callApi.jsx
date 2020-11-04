import axios from 'axios';
import {getBearerToken} from "./storageUtils";
import i18n from "../i18n/i18n";
if(i18n.language ==='vi'){
    axios.defaults.headers.post['lang'] = 'vn'
    axios.defaults.headers.get['lang'] = 'vn'
}else{
    axios.defaults.headers.post['lang'] = 'en'
    axios.defaults.headers.get['lang'] = 'en'
}
function callApi(endpoint, method, params, onSuccess, onFail) {
    const header=  {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${getBearerToken()}`
    }
    const api = axios.create({
        baseURL: (endpoint),
        timeout: 60000,
    });
    api.interceptors.response.use(res => {
        return res;
    }, error => Promise.reject(error));
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
