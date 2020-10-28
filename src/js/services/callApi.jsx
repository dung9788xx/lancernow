import axios from 'axios';
import {getBearerToken} from "./storageUtils";
import i18n from "../i18n/i18n";
console.log(i18n.language);
if(i18n.language ==='vi'){
    axios.defaults.headers.post['lang'] = 'vn'
    axios.defaults.headers.get['lang'] = 'vn'
}else{
    axios.defaults.headers.post['lang'] = 'en'
    axios.defaults.headers.get['lang'] = 'en'
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
        }).then(onSuccess).catch(onFail);
}

export default callApi;
