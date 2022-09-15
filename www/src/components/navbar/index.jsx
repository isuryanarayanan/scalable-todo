import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { NAVBAR_MODES, getNavbarMode, setNavbarMode } from './navbar.slice'
import { LOGIN } from '../../store/auth/actions'

function AuthenticatedNavbar() {
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Todo</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item m-1">
                            {/* <div className="btn btn-sm btn-danger"></div> */}
                            {/* <div className="btn btn-sm btn-danger" onClick={() => {
                                dispatch(setNavbarMode(NAVBAR_MODES.LOGGED_OUT))
                            }}></div> */}
                            <div className="btn btn-sm btn-danger" onClick={() => {
                                dispatch(LOGIN())
                            }}></div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

function UnAuthenticatedNavbar() {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

    const navbarMode = useSelector(getNavbarMode)
    const dispatch = useDispatch()

    if (navbarMode === NAVBAR_MODES.LOGGED_IN) {
        return AuthenticatedNavbar()
    } else if (navbarMode === NAVBAR_MODES.LOGGED_OUT) {
        return UnAuthenticatedNavbar()
    } else if (navbarMode === NAVBAR_MODES.HIDE) {
        return (
            <div className="navbar"></div>
        )
    }

}

export default Navbar