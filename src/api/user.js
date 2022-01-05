import { BASE_URL } from 'api';
import axios from 'axios';

const API_URL = `${BASE_URL}/user`;

export const getMe = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(`${API_URL}/me`, config);
};

export const deleteById = (id) => axios.delete(`${API_URL}/${id}`);

export const addFavorite = (userId, movieId) =>
  axios.post(`${API_URL}/${userId}/film/${movieId}/favorite`);

export const deleteFavorite = (userId, movieId) =>
  axios.delete(`${API_URL}/${userId}/film/${movieId}/favorite`);

export const post = (body) => axios.get(`${API_URL}/me`, body);
