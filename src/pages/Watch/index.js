import React from 'react';

import PropTypes from 'prop-types';
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link } from 'react-router-dom';

const Watch = () => {
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" />
    </div>
  );
};

Watch.propTypes = {};

export default React.memo(Watch);
