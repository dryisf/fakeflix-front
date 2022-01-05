import { BASE_URL } from 'api';
import axios from 'axios';

const API_URL = `${BASE_URL}/user`;

const getConfig = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const getMe = (token) => {
  const config = getConfig(token);
  return axios.get(`${API_URL}/me`, config);
};

export const deleteById = (id) => axios.delete(`${API_URL}/${id}`);

export const addFavorite = (userId, movieId) =>
  axios.post(`${API_URL}/${userId}/film/${movieId}/favorite`);

export const deleteFavorite = (userId, movieId) =>
  axios.delete(`${API_URL}/${userId}/film/${movieId}/favorite`);

export const post = (body) => axios.get(`${API_URL}/me`, body);

export const likeMovie = (token, userId, movieId) => {
  const config = getConfig(token);
  return axios.get(`${API_URL}/${userId}/film/${movieId}/favorite`, config);
};
