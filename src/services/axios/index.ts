
import axios from 'axios';

const endpoint = `https://${process.env.NEXT_PUBLIC_ENDPOINT}`;

const axiosService = axios.create({
  baseURL: endpoint,
  withCredentials: false
});

export default axiosService