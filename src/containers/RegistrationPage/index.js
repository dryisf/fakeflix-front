import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';
import RegistrationPageComponent from './components/RegistrationPage';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from 'containers/App/slice';
import { register as registerUser } from 'services/auth';

const RegistrationPage = ({ ...props }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async (data) => {
      const userToken = await registerUser(data);
      if (userToken) {
        dispatch(fetchUserInfo(userToken));
      }
    },
    [dispatch],
  );

  return (
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
