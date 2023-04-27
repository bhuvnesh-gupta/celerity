import React from 'react'
import  "../Styles/Login.css";
import { Link } from 'react-router-dom';


const LoginForm = () => {
    return (
        <>
        <div className='m-5 text-center'>This is an Preview Login Form Just Directly click on Login Button to LogIn to dashboard and Preview button to see preview</div>
            <div className='form'>
                <div className='h2 text-primary'>Log In</div>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label ">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to="/Dashboard" className="btn btn-primary m-2">Log In</Link>
                    <Link to="/preview" className="btn btn-outline-primary m-2">Preview</Link>
                    <Link to="/Registration" className="btn btn-outline-dark m-2">SignIn</Link>
                    
                </form>
            </div>
        </>
    )
}

export default LoginForm
