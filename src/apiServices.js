import axios from 'axios';


export const fetchData = (apiUrl, apiMethod, apiData = null) => {
    return axios({
        method: apiMethod,
        url: apiUrl,
        data: apiData,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
