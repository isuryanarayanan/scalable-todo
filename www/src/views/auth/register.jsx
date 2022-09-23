
import { Link } from 'react-router-dom';
function Register() {
    return (

        <div className="register">
            <div className="display-4 py-5">Create a new account.</div>

            <form className="w-25">
                <div className="form-outline mb-4">
                    <input type="email" id="register_email" className="form-control" />
                    <label className="form-label" htmlFor="register_email">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="register_username" className="form-control" />
                    <label className="form-label" htmlFor="register_username">Username</label>
                </div>
                <div className="row">
                    <div className=" col form-outline mb-4">
                        <input type="password" id="register_password" className="form-control" />
                        <label className="form-label" htmlFor="register_password">Password</label>
                    </div>

                    <div className=" col form-outline mb-4">
                        <input type="password" id="register_password_confirm" className="form-control" />
                        <label className="form-label" htmlFor="register_password_confirm">Confirm</label>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="register_privacy" />
                            <label className="form-check-label" htmlFor="register_privacy"> Agree to privacy policy </label>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="register_terms" />
                            <label className="form-check-label" htmlFor="register_terms"> Agree to terms of service</label>
                        </div>
                    </div>
                </div>

                <button type="button" className="btn btn-primary w-100 mb-4">Submit</button>

                <div className="text-center">
                    <p>Already a member? <Link to="/login" className=''>Login</Link></p>
                </div>
            </form>

        </div>
    )
}

export default Register