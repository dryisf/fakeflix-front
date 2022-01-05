import './listItem.scss';
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ index, movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  const movieImage = movie.urlImageFilm.endsWith('None')
    ? 'https://i2.wp.com/www.developingngo.org/wp-content/uploads/2018/01/2560x1440-gray-solid-color-background.jpg?w=1776&ssl=1'
    : movie.urlImageFilm;

  const movieDate = new Date(movie.annee);
  const movieYear = movieDate.getFullYear();
  return (
    <Link to={{ pathname: '/watch' }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movieImage} alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{`${movie.nom} - ${movieYear}`}</span>{' '}
                {movie.categorieAge && (
                  <p className="limit">{movie.categorieAge}</p>
                )}
              </div>
              <div className="desc">{movie.description}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
