import { createSlice } from '@reduxjs/toolkit';
import { getMe } from 'api/user';

export const slice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    isAuthentified: false,
    isLoading: false,
  },
  reducers: {
    getUserInfo: (state) => ({ ...state, isLoading: true }),
    getUserInfoSuccess: (state, { payload }) => ({
      userInfo: payload,
      isAuthentified: true,
      isLoading: false,
    }),
    logout: (state) => ({
      ...state,
      userInfo: null,
      isAuthentified: false,
    }),
  },
});

// selectors
export const selectIsAuthentified = (state) => state.user.isAuthentified;
export const selectUserInfo = (state) => state.user.userInfo;

// actions
export const { getUserInfo, getUserInfoSuccess, logout } = slice.actions;

// asynchronous thunk action
export const fetchUserInfo =
  (token, redirectToHome = false) =>
  async (dispatch) => {
    dispatch(getUserInfo());
    try {
      const response = await getMe(token);
      dispatch(getUserInfoSuccess(response.data));
      if (response.status === 200 && redirectToHome) {
      }
    } catch (error) {
      alert(`Erreur lors de la récupération des données de l'utilisateur`);
    }
  };

export const logUserOut = () => (dispatch) => {
  localStorage.removeItem('userToken');
  dispatch(logout());
};

export default slice.reducer;
