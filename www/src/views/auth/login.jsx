import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LOGIN } from '../../store/auth/actions/login';
import { toast } from "react-toastify";
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LOGIN({ 'email': email, 'password': password })).then(
            (res) => {
                if (res.payload.status === 200) {
                    toast.success('Login success');
                } else {
                    console.log("testing")
                    toast.error(JSON.parse(res.payload.response).non_field_errors[0])
                }
            }
        )
    }


    return (
        <div className="login">
            <div className="display-4 py-5">Login to your account!</div>

            <form className="w-25">
                <div className="form-outline mb-4">
                    {/* set value to email variable */}
                    <input type="email" id="login_email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="login_email">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="login_password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="login_password">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="login_remember" defaultChecked />
                            <label className="form-check-label" htmlFor="login_remember"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <p> <Link to="/forgot-password" className=''>Forgot Password</Link></p>
                    </div>
                </div>

                <button type="button" className="btn btn-primary w-100 mb-4" onClick={handleSubmit}>Sign in</button>

                <div className="text-center">
                    <p>Not a member? <Link to="/register" className=''>Register</Link></p>
                </div>
            </form>

        </div>
    )
}

export default Login