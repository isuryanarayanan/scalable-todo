import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from '../index.js';
import { setAccessToken, setRefreshToken, setLoggedIn } from '../index';
import { toast } from 'react-toastify';

export const LOGOUT = createAsyncThunk(
    moduleName + '/LOGOUT',
    // Function to make a login request
    async (payload, { dispatch, getState }) => {
        // Get endpoints
        const ROOT = getState().global.SERVICES.accounts.ROOT
        const API_LOGOUT = getState().global.SERVICES.accounts.API_LOGOUT
        const ENDPOINT = ROOT + API_LOGOUT + '/'

        // Make request using xmlhttprequest
        let xhr = new XMLHttpRequest();
        let promise = new Promise((resolve, reject) => {
            xhr.open("POST", ENDPOINT);
            xhr.setRequestHeader("Content-Type", "Application/json");
            xhr.onload = () => {
                resolve(xhr);
            };
            xhr.onerror = () => {
                reject(xhr);
            };
            xhr.send();
        });
        promise.then(data => {
            //  only if request is successful
            if (data.status === 200) {
                dispatch(setAccessToken(null));
                dispatch(setRefreshToken(null));
                dispatch(setLoggedIn(false));
            } else {
                // handle errors here
                toast.error("Login failed. Please try again.")
            }
        });
        return promise;
    }
);