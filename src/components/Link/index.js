import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: white;

    &&:hover {
      color: red;
    }
  }
`;

export default StyledLink;
