import React from 'react';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './featured.scss';

const Featured = ({ movie }) => {
  const movieImage = movie.urlImageFilm.endsWith('None')
    ? 'https://i2.wp.com/www.developingngo.org/wp-content/uploads/2018/01/2560x1440-gray-solid-color-background.jpg?w=1776&ssl=1'
    : movie.urlImageFilm;
  return (
    <div className="featured">
      <div className="category">
        <span>Films</span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
      <img src={movieImage} alt="" />
      <div className="info">
        <span style={{ fontWeight: 'bold', fontSize: 24 }}>{movie.nom}</span>
        <span className="desc">{movie.description}</span>
        <div className="buttons">
          <Link style={{ textDecoration: 'none' }} to={{ pathname: '/watch' }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
