import { TextField } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  &&&&&& {
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

export default StyledTextField;
