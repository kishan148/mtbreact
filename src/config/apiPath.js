import axios from 'axios';
const API_URL = "http://mtb.merge.ks/api/v1";
const axiosApi = axios.create({
    baseURL: "http://mtb.merge.ks/api/v1",
});

export const setAuthHeader = token => {
    axiosApi.defaults.headers.common.Authorization =
        `${token}` || `${localStorage.getItem('token')}`;
};

axiosApi.defaults.headers.common.Authorization = `${localStorage.getItem(
    'token',
)}`;

// Set the initial header from storage or something (should surround with try catch in actual app)
setAuthHeader(localStorage.getItem('token'));

export default axiosApi;