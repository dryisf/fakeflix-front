import { Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchUserInfo, selectIsAuthentified } from './slice';
import Navbar from 'components/Navbar';
import routes from 'config/routes';
import React, { useEffect } from 'react';
import ContentWrapper from './components/ContentWrapper';
import { useDispatch } from 'react-redux';

const shouldRedirectToLogin = (requiresAuthentication, isAuthentified) =>
  requiresAuthentication ? !isAuthentified : false;

const App = () => {
  const dispatch = useDispatch();
  const isAuthentified = useSelector(selectIsAuthentified);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      dispatch(fetchUserInfo(userToken));
    }
  }, [dispatch]);

  const navigateToLoginElement = (
    <Navigate
      to={{
        pathname: '/login',
      }}
    />
  );

  return (
    <div>
      <Navbar isAuthentified={isAuthentified} />
      <ContentWrapper>
        <Routes>
          {routes.map(({ title, path, element, requiresAuthentication }) => {
            const redirectToLogin = shouldRedirectToLogin(
              requiresAuthentication,
              isAuthentified,
            );

            return (
              <Route
                key={title}
                path={path}
                element={redirectToLogin ? navigateToLoginElement : element}
              />
            );
          })}
        </Routes>
      </ContentWrapper>
    </div>
  );
};

export default App;
