import HomePage from 'pages/HomePage';
import LatestMoviesPage from 'pages/LatestMoviesPage';
import LoginPage from 'pages/LoginPage';
import MyListPage from 'pages/MyListPage';
import RegistrationPage from 'pages/RegistrationPage';
import React from 'react';

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
];

export default routes;
