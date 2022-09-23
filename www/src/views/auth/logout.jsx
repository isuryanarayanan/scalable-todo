import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../store/auth/actions/logout';

function Logout() {
    var dispatch = useDispatch();

    const handleLogout = () => {
        console.log('handleLogout');
        dispatch(LOGOUT());
    };


    return (
        <div className="todo">
            <h1>You are about to be logged out!</h1>
            <div className="btn btn-danger btn-sm m-1" onClick={handleLogout}>Yes, log me out!</div>
            <div className="btn btn-success btn-sm m-1">No, take me back!</div>

        </div>
    )
}

export default Logout