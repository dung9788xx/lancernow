import axios from 'axios';
// const api = axios.create({
//     baseURL: (baseUrl === null ? API : baseUrl),
//     timeout: 60000,
// });
//
// const sendGet = (path, options) => (
//     api.get(path, options)
//         .then((response) => {
//             const {code} = response.data || {};
//             if (code === 503) {
//                 throw response;
//             } else {
//                 return response;
//             }
//         })
// );
// const generateGet = (path, params = null) => {
//     const userId = StorageUtils.getSectionStorageItem(STORAGE_KEYS.USER_ID_KEY);
//     const options = {
//         headers: {
//             Authorization: `Bearer ${StorageUtils.getToken()}`,
//             'X-AUTH-ID': userId || '0',
//             params,
//         },
//     };
//     return sendGet(path, options);
// };
// const getUserInfo = () => generateGet('/user-info');
function callApi(endpoint,method) {
    const api = axios.create({
        baseURL: ('http://netnews.vn'),
        timeout: 60000,
    });
    return  api.get('/')
}
export default callApi;
