import React from 'react'
import  "../Styles/Login.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>
        Ship<span className='logo-right'>mate.</span>
    </div>
    <nav>
    <Link to="/Dashboard" className="btn btn-primary m-2">Log In</Link>
        <button className='btn btn-light btn-outline-primary m-auto'>Learn more</button>
    </nav>
    </div>
  )
}

export default Header
