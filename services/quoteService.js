import axios from 'axios';
  
const axiosApiClient = axios.create()
//axiosApiClient.defaults.baseURL = "http://localhost:5000";
axiosApiClient.defaults.baseURL = "https://heroku-spring-boot-2681ceda9868.herokuapp.com";

export const getQuotes = () =>{
  return axiosApiClient.get('/quotes')
} 

export const getQuote = (id) =>{
  return axiosApiClient.get(`/quotes/${id}`)
}   