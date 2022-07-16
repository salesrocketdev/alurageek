import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://localhost:7217/',
  //baseURL: 'https://rocket-cequal.azurewebsites.net/',
})