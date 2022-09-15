import { configureStore } from "@reduxjs/toolkit";
import global from './global.js'
import navbar from '../components/navbar/navbar.slice';

export const store = configureStore({
  reducer: {
    global: global,
    navbar: navbar
  },
});
