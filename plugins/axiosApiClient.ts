import axios from 'axios';
  
export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig()
    const axiosApiClient = axios.create()
    axiosApiClient.defaults.baseURL = "https://mock-api.binaryboxtuts.com"
    axiosApiClient.interceptors.request.use(function (config) {
        config.headers['X-Binarybox-Api-Key'] = runtimeConfig.public.apiKey
        return config;
    });
    return {
        provide: {
            axiosApiClient: axiosApiClient,
        },
    };
});