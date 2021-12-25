import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

interface Instance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>;
}

const createInstance = () => {
  const config = {
    baseURL: '/api',
    withCredentials: true
  };

  const handleResponse = (response: any) => {
    return response.data;
  };

  const handleError = (error: any) => {
    const { response, message } = error;
    return Promise.reject(response ? new Error(response.data.message || message) : error);
  };

  const instance = axios.create(config);
  instance.interceptors.response.use(handleResponse, handleError);

  return instance;
};

const instance: Instance = createInstance();

export default instance;
