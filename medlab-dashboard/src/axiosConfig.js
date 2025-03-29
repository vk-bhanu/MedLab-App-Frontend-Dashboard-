// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://medlab-app-backend-server-git-main-vk-bhanus-projects.vercel.app/',
});

export default instance;
