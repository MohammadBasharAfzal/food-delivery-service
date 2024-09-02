import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend API URL
});

export const fetchMenuItems = () => {
  return api.get('/menu');
};
