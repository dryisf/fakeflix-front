import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';
import RegistrationPageComponent from './components/RegistrationPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, selectIsAuthentified } from 'containers/App/slice';
import { register as registerUser } from 'services/auth';
import { Navigate } from 'react-router-dom';

const RegistrationPage = ({ ...props }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const isAuthentified = useSelector(selectIsAuthentified);

  const onSubmit = useCallback(
    async (data) => {
      const userToken = await registerUser(data);
      if (userToken) {
        dispatch(fetchUserInfo(userToken));
      }
    },
    [dispatch],
  );

  return isAuthentified ? (
    <Navigate to={{ pathname: '/home' }} />
  ) : (
    <RegistrationPageComponent
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      {...props}
    />
  );
};

RegistrationPage.propTypes = {};

export default React.memo(RegistrationPage);
