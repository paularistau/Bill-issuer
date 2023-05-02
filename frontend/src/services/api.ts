import axios from 'axios';

export const url = axios.create({
  baseURL: 'https://localhost:3000' // substitua com a sua URL base
});
