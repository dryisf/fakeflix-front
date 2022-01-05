import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  && {
    text-decoration: none;
    color: #e5e5e5;

    &&:hover {
      color: #b3b3b3;
    }
  }
`;

export default CustomLink;
