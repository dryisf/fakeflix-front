import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

export const register = ({ username, email, password }) =>
  axios
    .post(`${BASE_URL}/register`, { username, email, password })
    .then(() => login({ username, password }))
    .catch(() => {
      alert(`Erreur lors de l'inscription`);
    });

export const login = ({ username, password }) =>
  axios
    .post(`${BASE_URL}/auth`, { username, password })
    .then((response) => {
      const userToken = response.data.token;
      localStorage.setItem('userToken', userToken);
      return userToken;
    })
    .catch(() => {
      alert(`Erreur lors de la connexion`);
    });
