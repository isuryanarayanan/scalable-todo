import './assets/styles/App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
