import React from 'react'
import '../Styles/Login.css'
import { Link } from 'react-router-dom'

const ButtonGroup = () => {

  const bookingPage = () => {
    alert('Do You Want To Go To Booking Page')
  }

  return (
    <div className='d-flex button'>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
      <Link to="/Booking" onClick={bookingPage} className="btn btn-outline-primary p-2 bot">Best Value 5-5 days</Link>
      <Link to="/Booking" onClick={bookingPage} className="btn btn-outline-primary p-2 bot">Quickest 5-5 days</Link>
      <Link to="/Booking" onClick={bookingPage} className="btn btn-outline-primary p-2 bot">Cheapest 5-5 days</Link>
  
</div>
    </div>
  )
}

export default ButtonGroup


