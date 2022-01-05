import React from 'react';
import "./home.scss";
import List from 'components/List';
import Featured from 'components/Featured/Featured';

const HomePage = () => <div className="home">
  <Featured/>
  <List/>
  <List/>
  <List/>
  <List/>
</div>;

HomePage.propTypes = {};

export default React.memo(HomePage);
