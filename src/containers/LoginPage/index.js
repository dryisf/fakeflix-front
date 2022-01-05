import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';
import LoginPageComponent from './components/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'services/auth';
import { fetchUserInfo, selectIsAuthentified } from 'containers/App/slice';
import { Navigate } from 'react-router-dom';

const LoginPage = ({ ...props }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const isAuthentified = useSelector(selectIsAuthentified);

  const onSubmit = useCallback(
    async (data) => {
      const { username, password } = data;
      const userToken = await login({ username, password });
      if (userToken) {
        dispatch(fetchUserInfo(userToken));
      }
    },
    [dispatch],
  );

  return isAuthentified ? (
    <Navigate to={{ pathname: '/home' }} />
  ) : (
    <LoginPageComponent
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      {...props}
    />
  );
};

LoginPage.propTypes = {};

export default React.memo(LoginPage);
