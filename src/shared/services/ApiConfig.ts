import axios from "axios"

export const Api = () => {
  return axios.create({
    baseURL: 'http://localhost:4000/v1/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    },
  });
};
