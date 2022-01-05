import { Grid, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import FlexDiv from 'components/FlexDiv';
import PropTypes from 'prop-types';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';

const StyledTextField = styled(TextField)`
  && {
    label {
      color: #b3b3b3;
    }

    fieldset {
      border-color: white;
    }

    input,
    textarea {
      color: #ffffff;
    }

    && > div::before {
      border-bottom: 1px solid red;
    }

    && > div::after {
      border-bottom: 2px solid purple;
    }
  }
`;

const LoginPage = ({ register, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <FlexDiv direction="column" alignItems="center">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <StyledTextField
            label="Nom d'utilisateur"
            variant="outlined"
            name="username"
            {...register('username', { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
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
        <Button variant="contained" type="submit">
          S'inscrire
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
