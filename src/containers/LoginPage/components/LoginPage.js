import { Grid } from '@mui/material';
import React from 'react';

import FlexDiv from 'components/FlexDiv';
import TextField from 'components/TextField';
import PropTypes from 'prop-types';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';

const LoginPage = ({ register, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <FlexDiv direction="column" alignItems="center">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <TextField
            label="Nom d'utilisateur"
            variant="outlined"
            name="username"
            {...register('username', { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mot de passe"
            variant="outlined"
            name="password"
            type="password"
            {...register('password', { required: true })}
          />
        </Grid>
      </Grid>
      <ButtonWrapper direction="column">
        <Button variant="contained" type="submit">
          Se connecter
        </Button>
      </ButtonWrapper>
    </FlexDiv>
  </form>
);

LoginPage.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default React.memo(LoginPage);
