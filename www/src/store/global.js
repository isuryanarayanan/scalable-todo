import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'global',
    initialState: {
        // Services
        SERVICES: {
            // Accounts service
            accounts: {

                // Server URL
                ROOT: '',
                ROOT_PROD: 'https://accounts.glitchh.in',
                ROOT_DEV: 'http://127.0.0.1:8000',

                // API endpoints
                API_LOGIN: '/tokens/login',
                API_LOGOUT: '/tokens/logout',
                API_REGISTER: '/tokens/register',
                API_VERIFY: '/tokens/verify',
            }
        }
    },
    reducers: {
        // set current root
        setRoot: (state, action) => {
            if (action.payload === 'prod') {
                state.SERVICES.accounts.ROOT = state.SERVICES.accounts.ROOT_PROD
            } else if (action.payload === 'dev') {
                state.SERVICES.accounts.ROOT = state.SERVICES.accounts.ROOT_DEV
            }
        },
    }
})



export const { setRoot } = slice.actions

export default slice.reducer