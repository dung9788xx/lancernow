import axios from 'axios';
import {getBearerToken} from "./storageUtils";
import i18next from "i18next";
if(i18next.language ==='vi'){
    axios.defaults.headers.post['lang'] = 'vn'
}else{
    axios.defaults.headers.post['lang'] = 'en'
}

axios.defaults.headers.common = {'Authorization': `Bearer '${getBearerToken()}'`}
function callApi(endpoint, method, params, onSuccess, onFail) {
    const api = axios.create({
        baseURL: (endpoint),
        timeout: 60000,
    });
    if (method === 'POST')
        return api.post('',
                params
        ).then(onSuccess).catch(onFail);
    else
        return api.get('', {
                params
        })
}

export default callApi;
