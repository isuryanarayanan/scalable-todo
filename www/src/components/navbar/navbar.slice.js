import { createSlice } from '@reduxjs/toolkit'

export const NAVBAR_MODES = {
    HIDE: 'HIDE',
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
}

export const slice = createSlice({
    name: 'navbar',
    initialState: {
        mode: NAVBAR_MODES.LOGGED_IN
    },
    reducers: {
        setNavbarMode(state, action) {
            state.mode = action.payload
        }
    }
})

// selectors
export const getNavbarMode = state => state.navbar.mode

export const { setNavbarMode } = slice.actions

export default slice.reducer