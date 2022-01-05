import React, { useCallback } from 'react';
import './home.scss';
import List from 'components/List';
import Featured from 'components/Featured/Featured';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, selectMovies } from './slice';

const sliceMovies = (movies) => {
  const size = 10;
  const moviesArrays = [];
  for (var i = 0; i < movies.length; i += size) {
    moviesArrays.push(movies.slice(i, i + size));
  }
  return moviesArrays;
};

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  const moviesArrays = sliceMovies(movies);
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      dispatch(fetchMovies(userToken));
    }
  }, [dispatch]);

  return (
    <div className="home">
      {randomMovie && <Featured movie={randomMovie} />}
      {moviesArrays.map((moviesArray) => (
        <List movies={moviesArray} />
      ))}
    </div>
  );
};

HomePage.propTypes = {};

export default React.memo(HomePage);
