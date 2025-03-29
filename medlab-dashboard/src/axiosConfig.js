// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://med-lab-app-frontend-dashboard.vercel.app',
});

export default instance;
