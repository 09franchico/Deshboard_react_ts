import axios from "axios"

export const Api =  axios.create({
    baseURL: 'http://localhost:4000/v1/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    },
  });

  
Api.interceptors.request.use(
  function (config) {
  const storageData = localStorage.getItem('authToken');
  config.headers.Authorization = storageData;

  return config;
}, 

function (error) {
  return Promise.reject(error);
});
