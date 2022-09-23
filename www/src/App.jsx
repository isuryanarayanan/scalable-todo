import './assets/styles/App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/index'
import { useDispatch, useSelector } from 'react-redux'
import { setRoot } from './store/global'
import { useEffect, useRef } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  var dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRoot('dev'))
  }, [dispatch])


  return (
    <div className="App container">
      <Navbar />
      <Outlet />
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App
