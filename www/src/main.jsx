import React from 'react'
import ReactDOM from 'react-dom/client'

// Redux setup
import { Provider } from "react-redux";
import { store } from "./store/index";

// Router setup and views
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/auth/login'
import Logout from './views/auth/logout'
import Register from './views/auth/register'
import Todo from './views/todo/todo'
import TodoDelete from './views/todo/todo.delete'

// App essentials
import App from './App'
import './assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='login/' element={<Login />} />
            <Route path='logout/' element={<Logout />} />
            <Route path='register/' element={<Register />} />
            <Route path='todo/' element={<Todo />} />
            <Route path='todo/delete/' element={<TodoDelete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
