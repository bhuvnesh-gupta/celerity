import React from 'react'
import  "../Styles/Login.css";
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
       <>
            <div className='form'>
                <div className='h2 text-primary'>Register</div>
                <form>
                <div className="mb-3">
                        <label for="FirstName" className="form-label ">First Name</label>
                        <input type="text" className="form-control" id="FirstName" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="LastName" className="form-label ">Last Name</label>
                        <input type="text" className="form-control" id="LastName" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label ">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" /> 
                        <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />

                    </div>

                    <Link to="/Dashboard" className="btn btn-primary m-2">Sign Up</Link>
                    <Link to="/preview" className="btn btn-outline-primary m-2">Preview</Link>
                    
                </form>
            </div>
        </>
  )
}

export default RegistrationForm
