import { Button, Grid } from '@mui/material';
import React from 'react';

import TextField from 'components/TextField';
import FlexDiv from 'components/FlexDiv';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';

const RegistrationPage = ({ register, handleSubmit, onSubmit }) => (
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
            label="Adresse e-mail"
            variant="outlined"
            name="email"
            {...register('email', { required: true })}
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
      <ButtonWrapper>
        <Button variant="contained" type="submit">
          S'inscrire
        </Button>
      </ButtonWrapper>
    </FlexDiv>
  </form>
);

RegistrationPage.propTypes = {
  register: PropTypes.func,
};

export default React.memo(RegistrationPage);
