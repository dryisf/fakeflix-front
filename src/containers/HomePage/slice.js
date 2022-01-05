import { createSlice } from '@reduxjs/toolkit';
import { getAllMovies } from 'api/movies';

export const slice = createSlice({
  name: 'movies',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    getMovies: (state) => ({ ...state, isLoading: true }),
    getMoviesSuccess: (state, { payload }) => ({
      ...state,
      data: payload,
      isLoading: false,
    }),
    getMoviesFailure: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

// selectors
export const selectMovies = (state) => state.movies.data;
export const selectIsLoading = (state) => state.movies.isLoading;

// actions
export const { getMovies, getMoviesSuccess, getMoviesFailure } = slice.actions;

// asynchronous thunk action
export const fetchMovies = (token) => async (dispatch) => {
  dispatch(getMovies());
  try {
    const response = await getAllMovies(token);
    dispatch(getMoviesSuccess(response.data));
  } catch (error) {
    alert(`Erreur lors de la récupération des films`);
  }
};

export default slice.reducer;
