import { Button } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    color: #e6030c;
    &&:hover {
      background-color: rgb(210 25 25 / 4%);
    }
  }
`;

export default StyledButton;
