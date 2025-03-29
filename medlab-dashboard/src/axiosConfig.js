import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://medlab-app-backend-server.vercel.app',
});

export default instance;
