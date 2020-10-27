const BEARER_KEY='Bearer_token';
export function getBearerToken() {
    return  localStorage.getItem(BEARER_KEY);
}
