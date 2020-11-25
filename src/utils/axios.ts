import axios from 'axios';

axios.defaults.withCredentials = true;

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response): any => {
    console.info('==axios response==', response);
    if (response.status !== 200) {
      //perform the manipulation here and change the response object
      Promise.reject(response.data);
      return;
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);
