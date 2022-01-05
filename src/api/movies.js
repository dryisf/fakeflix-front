import { BASE_URL } from '.';
import axios from 'axios';

const API_URL = `${BASE_URL}/film`;

export const getAllMovies = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(`${API_URL}/all`, config);
};
