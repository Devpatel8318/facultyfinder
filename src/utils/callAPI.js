import axios from 'axios';

const callAPI = (apiURL, apiMethod, apiData = null) => {
    return new Promise((resolve, reject) => {
        axios({
            url: apiURL,
            method: apiMethod,
            data: apiData,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err.response);
            });
    });
};
export default callAPI;
