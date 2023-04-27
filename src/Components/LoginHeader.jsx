import React from 'react'
import  "../Styles/Login.css"
import { Link } from 'react-router-dom'

const Header = () => {

  const changeCurrency = () => {
    alert('Change Your Currency Here')
  }
const TrackShipment = () => {
  alert('Track Your Shipment')
}

  return (
    <div className='header'>
    <div className='logo'>
        Ship<span className='logo-right'>mate.</span>
    </div>
    <nav>
        <button onClick={changeCurrency} className='btn btn-light btn-outline-primary me-4'>$</button>
        <Link to="/Shipping" onClick={TrackShipment} className="btn btn-primary m-2">Track Shipment</Link>
    </nav>
    </div>
  )
}

export default Header
