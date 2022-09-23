import { createSlice } from '@reduxjs/toolkit';
import { state } from './state'

export const moduleName = 'auth';

export const slice = createSlice({
    name: moduleName,
    initialState: state,
    reducers: {
        setLoggedIn: (state, action) => {
            state.AUTH_LOGGED_IN = action.payload;
        },
        setAuthUser: (state, action) => {
            state.AUTH_USER = action.payload;
        },
        setAccessToken: (state, action) => {
            state.ACCESS_TOKEN = action.payload;
            if (action.payload) {
                localStorage.setItem('ACCESS_TOKEN', action.payload);
            } else {
                localStorage.removeItem('ACCESS_TOKEN');
            }

        },
        setRefreshToken: (state, action) => {
            state.REFRESH_TOKEN = action.payload;
            if (action.payload) {
                localStorage.setItem('REFRESH_TOKEN', action.payload);
            } else {
                localStorage.removeItem('REFRESH_TOKEN');
            }

        }
    },
})

export const getLoggedIn = (state) => {
    return state.auth.AUTH_LOGGED_IN
}

export const { setLoggedIn, setAuthUser, setAccessToken, setRefreshToken } = slice.actions

export default slice.reducer