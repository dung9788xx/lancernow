import {BEARER_KEY, EMAIL_KEY, REMEMBER_KEY, ROLE_KEY} from "../constansts/storageConst";

export function getBearerToken() {
    if(localStorage.getItem(REMEMBER_KEY) == "true"){
        return  localStorage.getItem(BEARER_KEY);
    } else {
        return  sessionStorage.getItem(BEARER_KEY);
    }

}
export function setUserInfo(object, isRememberme) {
    localStorage.setItem(REMEMBER_KEY, isRememberme);
    if (isRememberme) {
        localStorage.setItem(BEARER_KEY, object.token);
        localStorage.setItem(EMAIL_KEY, object.email);
        localStorage.setItem(ROLE_KEY, object.role);
    } else {
        sessionStorage.setItem(BEARER_KEY, object.token);
        sessionStorage.setItem(EMAIL_KEY, object.email);
        sessionStorage.setItem(ROLE_KEY, object.role);
    }
}
export function getStorageItem(key) {
    if(localStorage.getItem(REMEMBER_KEY) == "true"){
        return  localStorage.getItem(key);
    } else {
        return  sessionStorage.getItem(key);
    }
}
