import React from 'react';

import PropTypes from 'prop-types';
import List from 'components/List';
import Container from 'components/List/Container';

const MyListPage = () => {
  return (
    <Container>
      <List />
      <List />
      <List />
    </Container>
  );
};

MyListPage.propTypes = {};

export default React.memo(MyListPage);
