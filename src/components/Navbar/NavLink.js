import { useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';
import styled, { css } from 'styled-components';

import CustomLink from 'components/CustomLink';

const NavLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledCustomLink isActive={match} to={to} {...props}>
      {children}
    </StyledCustomLink>
  );
};

const StyledCustomLink = styled(CustomLink)`
  && {
    margin-left: 20px;
    ${({ isActive }) =>
      isActive &&
      css`
        font-weight: 700;
      `}
  }
`;

export default NavLink;
