import { UserAuth } from 'src/common/models/userAuth.model';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean;
  user: UserAuth | null;
  loading: boolean;
  error: string | null;
}

const loadState = (): AuthState => {
  const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };

  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading authentication state:', error);
    return initialState;
  }
};

const initialState = (() => {
  return loadState();
})()

const saveState = (state: AuthState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('authState', serializedState);
  } catch {
    // ignore write errors
  }
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<UserAuth>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      saveState(state);
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
      saveState(state);
    },
    logout(state) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      saveState(state);
    },
    updateUser(state, action: PayloadAction<UserAuth>) {
      state.user = action.payload;
      saveState(state);
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;

