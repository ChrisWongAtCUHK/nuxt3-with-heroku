import axios from 'axios';
  
const axiosApiClient = axios.create()
axiosApiClient.defaults.baseURL = "http://localhost:5000";

export const getQuotes = () =>{
  return axiosApiClient.get('/quotes')
} 
