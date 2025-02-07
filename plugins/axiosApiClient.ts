import axios from 'axios';
  
export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig()
    const axiosApiClient = axios.create()
    // axiosApiClient.defaults.baseURL = "http://localhost:5000";
    axiosApiClient.defaults.baseURL = "https://heroku-spring-boot-2681ceda9868.herokuapp.com";
    return {
        provide: {
            axiosApiClient: axiosApiClient,
        },
    };
});