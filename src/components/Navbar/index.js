import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';

import Logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import routes from 'config/routes';

import Img from './Img';
import NavLink from './NavLink';
import LinksWrapper from './LinksWrapper';
import Wrapper from './Wrapper';
import { useDispatch } from 'react-redux';
import { logUserOut } from 'containers/App/slice';
import FlexDiv from 'components/FlexDiv';
import Button from './Button';

const Navbar = ({ isAuthentified }) => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logUserOut());
  }, [dispatch]);

  return (
    <Wrapper justify="space-between" alignItems="center">
      <FlexDiv alignItems="center">
        <Link to="/home">
          <Img src={Logo} alt="logo" />
        </Link>
        {isAuthentified && (
          <LinksWrapper alignItems="center">
            {routes
              .filter((route) => route.requiresAuthentication)
              .map((route) => (
                <NavLink key={route.title} to={route.path}>
                  {route.title}
                </NavLink>
              ))}
          </LinksWrapper>
        )}
      </FlexDiv>

      <LinksWrapper alignItems="center">
        {isAuthentified ? (
          <Button onClick={onLogout}>Se déconnecter</Button>
        ) : (
          <NavLink to="/register">Inscription</NavLink>
        )}
      </LinksWrapper>
    </Wrapper>
  );
};

Navbar.propTypes = {
  isAuthentified: PropTypes.bool,
};

export default Navbar;
