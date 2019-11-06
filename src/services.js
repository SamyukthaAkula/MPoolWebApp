import { fetchData } from './apiServices';
import { baseUrl,endPoints } from './constants'



export const loginToM_Pool = (cred) => {
    return new Promise((resolve, reject) => {
        fetchData(`${baseUrl}${endPoints.login}`, 'POST',{...cred}).then((response) => {
          resolve(response.data);
        }).catch((error) => {
          reject(error);
        });
      });
}

export const getBranches = () => {
  return new Promise((resolve, reject) => {
      fetchData(`${baseUrl}${endPoints.getBranches}`, 'GET').then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
}