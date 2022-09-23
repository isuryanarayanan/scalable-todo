import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getLoggedIn } from '../../store/auth';
import './navbar.css'

function AuthenticatedNavbar(dispatch) {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Todo</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item m-1">
                            <Link to="/logout" className='btn btn-primary btn-sm'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

function UnAuthenticatedNavbar(dispatch) {
    return (
        <div className="navbar">

            <nav className="navbar  navbar-expand-lg ">
                <a className="navbar-brand" href="#">Todo</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item m-1">
                            <Link to="/login" className='btn btn-primary btn-sm'>Login</Link>
                        </li>
                        <li className="nav-item m-1">
                            <Link to="/register" className='btn btn-primary btn-sm'>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

function Navbar() {

    const isAuthenticated = useSelector(getLoggedIn)
    const dispatch = useDispatch()

    if (isAuthenticated) {
        return AuthenticatedNavbar(dispatch)
    } else {
        return UnAuthenticatedNavbar(dispatch)
    }
}

export default Navbar