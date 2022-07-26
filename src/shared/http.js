import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://alura-ecommerce.azurewebsites.net/',
  //baseURL: 'https://rocket-cequal.azurewebsites.net/',
})