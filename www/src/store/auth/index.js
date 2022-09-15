import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import state from './state'

const moduleName = 'auth'

export const LOGIN = createAsyncThunk(
    moduleName + '/LOGIN',
    async (username, password) => {
        // return response.data;
    }
);

export const slice = createSlice({
    name: moduleName,
    initialState: state,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(LOGIN.pending, (state) => {
            state.status = 'loading';
        }).addCase
    }
})


export const { } = slice.actions

export default slice.reducer