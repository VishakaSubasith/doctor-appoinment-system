import axios from 'axios';

const endpoint =process.env.NEXT_PUBLIC_ENDPOINT;

const axiosService = axios.create({
  baseURL: endpoint,
  withCredentials: false,
});

export default axiosService;