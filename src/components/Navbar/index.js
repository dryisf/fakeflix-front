import React from 'react';

import Logo from 'assets/logo.png';
import routes from 'config/routes';

import Img from './Img';
import Link from './Link';
import LinksWrapper from './LinksWrapper';
import Wrapper from './Wrapper';

const Navbar = () => {
  return (
    <Wrapper justify="space-between">
      <Img src={Logo} />
      <LinksWrapper alignItems="center">
        {routes.map((route) => (
          <Link key={route.title} to={route.path}>
            {route.title}
          </Link>
        ))}
      </LinksWrapper>
    </Wrapper>
  );
};

export default Navbar;
