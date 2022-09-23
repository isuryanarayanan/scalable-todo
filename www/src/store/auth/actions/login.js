import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from '../index.js';
import { setAccessToken, setRefreshToken, setLoggedIn } from '../index';
import { toast } from 'react-toastify';

export const LOGIN = createAsyncThunk(
    moduleName + '/LOGIN',
    // Function to make a login request
    (payload, { dispatch, getState }) => {
        // Get endpoints
        const ROOT = getState().global.SERVICES.accounts.ROOT
        const API_LOGIN = getState().global.SERVICES.accounts.API_LOGIN

        const ENDPOINT = ROOT + API_LOGIN + '/'

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
            xhr.send(JSON.stringify(payload));
        });
        promise.then(data => {
            //  only if request is successful
            if (data.status === 200) {
                dispatch(setAccessToken(JSON.parse(data.response).access));
                dispatch(setRefreshToken(JSON.parse(data.response).refresh));
                dispatch(setLoggedIn(true));
            } else {
                // handle errors here
                toast.error("Login failed. Please try again.")
            }
        });
        return promise;
    }
);