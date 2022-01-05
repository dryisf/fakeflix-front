import HomePage from 'pages/HomePage';
import LatestMoviesPage from 'pages/LatestMoviesPage';
import LoginPage from 'pages/LoginPage';
import MyListPage from 'pages/MyListPage';
import RegistrationPage from 'pages/RegistrationPage';
import React from 'react';
import Watch from 'pages/Watch';

const routes = [
  {
    title: 'Accueil',
    path: '/home',
    element: <HomePage />,
    requiresAuthentication: true,
  },
  {
    title: 'Inscription',
    path: '/register',
    element: <RegistrationPage />,
    requiresAuthentication: false,
  },
  {
    title: 'Connexion',
    path: '/login',
    element: <LoginPage />,
    requiresAuthentication: false,
  },
  {
    title: 'Ma Liste',
    path: '/my-list',
    element: <MyListPage />,
    requiresAuthentication: true,
  },
  {
    title: 'Nouveautés',
    path: '/latest',
    element: <LatestMoviesPage />,
    requiresAuthentication: true,
  },
  {
    title: '',
    path: '/watch',
    element: <Watch />,
    requiresAuthentication: true,
  },
];

export default routes;
