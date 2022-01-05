import HomePage from 'containers/HomePage';
import LatestMoviesPage from 'containers/LatestMoviesPage';
import LoginPage from 'containers/LoginPage';
import MyAccountPage from 'containers/MyAccountPage';
import MyListPage from 'containers/MyListPage';
import RegistrationPage from 'containers/RegistrationPage';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Watch from 'containers/Watch';

const routes = [
  {
    title: 'Root',
    path: '/',
    element: (
      <Navigate
        to={{
          pathname: '/home',
        }}
      />
    ),
    requiresAuthentication: false,
  },
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
    title: 'Ma liste',
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
    title: 'Mon compte',
    path: '/my-account',
    element: <MyAccountPage />,
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
