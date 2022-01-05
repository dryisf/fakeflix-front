import { Button } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    margin-top: 16px;
    background-color: #e6030c;

    &&:hover {
      background-color: #d3040b;
    }
  }
`;

export default StyledButton;
