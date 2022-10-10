import { configureStore } from "@reduxjs/toolkit";
import global from './global.js'
import navbar from '../components/navbar/navbar.slice';
import auth from './auth/index.js'


export const store = configureStore({
  reducer: {
    global: global,
    auth: auth,
    // navbar: navbar
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

});
