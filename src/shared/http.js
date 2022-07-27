import axios from 'axios';

export const http = axios.create({
  //baseURL: 'https://localhost:7006/',
  baseURL: 'https://alura-ecommerce.azurewebsites.net/',
})