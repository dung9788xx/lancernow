import {BEARER_KEY, EMAIL_KEY} from "../constansts/storageConst";

export function getBearerToken() {
    if(localStorage.getItem('remember')){
        return  localStorage.getItem(BEARER_KEY);
    } else {
        return  sessionStorage.getItem(BEARER_KEY);
    }

}
export function setUserInfo(object, isRememberme) {
    localStorage.setItem('remember', isRememberme);
    if (isRememberme) {
        localStorage.setItem(BEARER_KEY, object.token);
        localStorage.setItem(EMAIL_KEY, object.email);
    } else {
        sessionStorage.setItem(BEARER_KEY, object.token);
        sessionStorage.setItem(EMAIL_KEY, object.email);
    }
}
export function getStorageItem(key) {
    if(localStorage.getItem('remember')){
        return  localStorage.getItem(key);
    } else {
        return  sessionStorage.getItem(key);
    }
}
